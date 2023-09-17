import { Router } from "express";
import { ChatGPTAPI } from 'chatgpt'
import clientProvider from "../../utils/clientProvider.js";
import subscriptionRoute from "./recurringSubscriptions.js";
import  OpenAIKeyModel  from "../../utils/models/OpenAIKeyModel.js";
import dotenv from 'dotenv';
dotenv.config();

const userRoutes = Router();
userRoutes.use(subscriptionRoute);

userRoutes.get("/api/shop", async (req, res) => {
  // Refer to docs: https://shopify.dev/docs/api/admin-rest/2023-01/resources/shop#resource-object
    const { client } = await clientProvider.restClient({
      req,
      res,
      isOnline: false,
    });

    const getResponse = await client.get({
      path: 'shop.json',
    });


    res.status(200).send(getResponse.body.shop.domain);
  });

userRoutes.get("/api", (req, res) => {
  const sendData = { text: "This is coming from /apps/api route." };
  res.status(200).json(sendData);
});

userRoutes.post("/api", (req, res) => {
  res.status(200).json(req.body);
});

userRoutes.get("/api/gql", async (req, res) => {
  //false for offline session, true for online session
  const { client } = await clientProvider.graphqlClient({
    req,
    res,
    isOnline: false,
  });

  const shop = await client.query({
    data: `{
      shop {
        name
      }
    }`,
  });

  res.status(200).send(shop);
});


//------------------------------ MY ENDPOINTS ---------------------------------------------------------------
/*
userRoutes.get('/api/backend/getOpenAIKey', async (req, res) => {
  const { client } = await clientProvider.restClient({
    req,
    res,
    isOnline: false,
  });

  const getResponse = await client.get({
    path: 'shop.json',
  });

  let result;
  if (result = await OpenAIKeyModel.findOne({shop_id: getResponse.body.shop.id})) {

    res.status(200).json({openAIKey: result.open_ai_key})
  } else {
    console.log(resultS)
    res.status(200).json({openAIKey: ''})
  }

});

userRoutes.post('/api/backend/storeOpenAIKey', async (req, res) => {

  const { client } = await clientProvider.restClient({
    req,
    res,
    isOnline: false,
  });

  const getResponse = await client.get({
    path: 'shop.json',
  });
  let result;
  if (await OpenAIKeyModel.exists({shop_id: getResponse.body.shop.id})) {
    result = await OpenAIKeyModel.findOneAndReplace({ shop_id: getResponse.body.shop.id}, { open_ai_key: req.body.openAIKeyValue, shop_id: getResponse.body.shop.id });
  } else {
    const doc = await OpenAIKeyModel.create({ open_ai_key: req.body.openAIKeyValue, shop_id: getResponse.body.shop.id });
    result = await doc.save();
  }

  console.log(result, req.body.openAIKeyValue)
  res.status(200).json({openAIKey: req.body.openAIKeyValue});
});



userRoutes.get('/api/backend/printScriptss', async (req, res, next) => {
  console.log('PRINT SCRIPTS')
  const { client } = await clientProvider.restClient({
    req,
    res,
    isOnline: false,
  });

  const getScriptsResponse = await client.get({
    path: `script_tags.json`,
  });

  console.log(getScriptsResponse.body.script_tags);
})

userRoutes.get('/api/backend/hasScripts', async (req, res) => {
  const { client } = await clientProvider.restClient({
    req,
    res,
    isOnline: false,
   });
 
   const getScriptsResponse = await client.get({
     path: `script_tags.json`,
   });
 
   let scriptInstalled = false;
   for (let script_tag of getScriptsResponse.body.script_tags) {
     if (script_tag.src.search('shopify-store-editor-ai-script')) {
       scriptInstalled = true;
       break;
     }
   }

   res.status(200).json({scriptInstalled});
})

userRoutes.get('/api/backend/remove', async (req, res, next) => {
  const { client } = await clientProvider.restClient({
    req,
    res,
    isOnline: false,
  });
 
  const getScriptsResponse = await client.get({
    path: `script_tags.json`,
  });
 
  let scriptInstalled = false;
  let scriptIds = [];
 
  for (let script_tag of getScriptsResponse.body.script_tags) {
    console.log('SCRIPT TAG');
    console.log(script_tag);
    if (script_tag.src.includes('shopify-store-editor-ai-proxy')) {
      console.log('DELETE: ' + script_tag.src);
      scriptInstalled = true;
      scriptIds.push(script_tag.id)
    }
  }

  if (scriptInstalled) {
    let deleteScriptTagResponse;
    try { 
      for (let scriptId of scriptIds) {
          deleteScriptTagResponse = await client.delete({
          path: `script_tags/${scriptId}.json`,
          data: {
            script_tag: {
              event: 'onload',
              id: scriptId
            }
          }
        });

      }

      res.status(200).json({msg: 'success'});
    } catch(e) {
      console.log(e)
      res.status(300).json({msg: 'fail'})
    }
  } else {
    res.json({msg: 'script not installed'})
  }
})

userRoutes.get('/api/backend/addScript', async (req, res, next) => {
  const { client } = await clientProvider.restClient({
   req,
   res,
   isOnline: false,
  });

  const shopResponse = await client.get({
    path: `shop.json`,
  }); 

  const shopDomain = shopResponse.body.shop.myshopify_domain;


  const getScriptsResponse = await client.get({
    path: `script_tags.json`,
  });

  let scriptInstalled = false;
  for (let script_tag of getScriptsResponse.body.script_tags) {
    if (script_tag.src.search('shopify-store-editor-ai-proxy')) {
      scriptInstalled = true;
      break;
    }
  }
 
  if (!scriptInstalled) {
   let postScriptTagResponse;
   try {

     console.log(`ADD: https://${shopDomain}/apps/shopify-store-editor-ai-proxy/javascript.js`)
     postScriptTagResponse = await client.post({
       path: 'script_tags.json',
       data: {
         script_tag: {
           event: 'onload',
           src:  `https://${shopDomain}/apps/shopify-store-editor-ai-proxy/javascript.js`
         }
       }
     });

     console.log(`ADD: https://${shopDomain}/apps/shopify-store-editor-ai-proxy/styles.js`)
     postScriptTagResponse = await client.post({
       path: 'script_tags.json',
       data: {
         script_tag: {
           event: 'onload',
           src: `https://${shopDomain}/apps/shopify-store-editor-ai-proxy/styles.js`
         }
       }
     });

     console.log(`ADD: https://${shopDomain}/apps/shopify-store-editor-ai-proxy/html.js`)
     postScriptTagResponse = await client.post({
       path: 'script_tags.json',
       data: {
         script_tag: {
           event: 'onload',
           src: `https://${shopDomain}/apps/shopify-store-editor-ai-proxy/html.js`
         }
       }
     });

     

     res.status(200).json({msg: 'success'})
   } catch(e) {
    console.log(e);
     res.status(300).json({msg: 'fail'})
   }
  } else {
    res.status(300).json({msg: 'Scripts already installed'})
  }
});





userRoutes.post('/api/backend/chatgpt', async (req, res) => {
  const { client } = await clientProvider.restClient({
    req,
    res,
    isOnline: false,
  });

  const getResponse = await client.get({
    path: 'shop.json',
  });

  if (await OpenAIKeyModel.exists({shop_id: getResponse.body.shop.id})) {
    const key = (await OpenAIKeyModel.findOne({shop_id: getResponse.body.shop.id})).open_ai_key;
  
    try {
      const api = new ChatGPTAPI({
        apiKey: key
      })
      const response = await api.sendMessage(req.body.message);
      res.status(200).json({ response: response.text});
    } catch (e) {
      console.log(e);
      res.status(300).json({ response: e });
    }
  } else {
    res.status(300).json({ response: 'NO OPEN AI KEY' });

  }

})*/

//------------------------------ MY SHOPIFY ENDPOINTS -------------------------------------------------------

//Get all products
userRoutes.get('/api/backend/2023-04/products.json', async (req, res) => {
  try {
    const { client } = await clientProvider.restClient({
      req,
      res,
      isOnline: false,
    });

    const getResponse = await client.get({
      path: 'products',
    });

    getResponse.body.products.forEach((product) => {
      console.log(product.title)
    })

    res.status(200).send(getResponse.body);

  } catch (e) {
    res.status(200).send('ERROR:\n' + e);
  }
  
/*
  try {
    const response = await shopify.api.rest.Product.all({
      session: res.locals.shopify.session
    });
    console.log('sent PRODUCTS JSON')
    res.status(200).send(response);

  } catch(err) {

    res.status(500).send(err);
  }*/
});

//Get a single product 
userRoutes.get('/api/backend/2022-07/products/:productId', async (req, res) => {

  try {
    const productId = Number(req.params.productId.split('.')[0]);

    const response = await shopify.api.rest.Product.find({
      session: res.locals.shopify.session,
      id: productId,
    });

    res.status(200).send(response);

  } catch(err) {

    res.status(500).send(err);
  }
});

//Update Single Product
userRoutes.put('/api/backend/2023-04/products/:productId', async (req, res) => {
 // console.log('id: ' + req.body.id + '\t\tdescription: ' + req.body.description)
  try {
    const product = new shopify.api.rest.Product({session: res.locals.shopify.session});
    product.id = req.body.id; //Number(productId)
    product.body_html = req.body.body_html;

    const response = await product.save({
      update: true,
    });

    res.status(200).send(response);

  } catch(err) {

    res.status(500).send(err);
  }
})




//---------------------------------------------------------------------------------------------

userRoutes.get("/api/backend/products/count", async (_req, res) => {
  const countData = await shopify.api.rest.Product.count({
    session: res.locals.shopify.session,
  });
  res.status(200).send(countData);
//  res.status(200).end('countdata');
});

userRoutes.get("/api/backend/products/create", async (_req, res) => {
  let status = 200;
  let error = null;

  try {
    await productCreator(res.locals.shopify.session);
  } catch (e) {
    console.log(`Failed to process products/create: ${e.message}`);
    status = 500;
    error = e.message;
  }
  res.status(status).send({ success: status === 200, error });
});

export default userRoutes;
