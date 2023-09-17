import { Router } from "express";
import { ChatGPTAPI } from 'chatgpt'
import shopify from "../../../utils/shopifyConfig.js"
import clientProvider from "../../../utils/clientProvider.js";
import { DataType } from "@shopify/shopify-api";
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


const proxyRouter = Router();

proxyRouter.get("/json", async (req, res) => {
  return res.status(200).send({ content: "Proxy Be Working" });
});

proxyRouter.get('/html.js', async (req, res) => {
  res.sendFile(path.join(__dirname, '/scripts/html.js'))
});

proxyRouter.get('/styles.js', async (req, res) => {
  res.sendFile(path.join(__dirname, '/scripts/styles.js'))
});

proxyRouter.get('/javascript.js', async (req, res) => {
  res.sendFile(path.join(__dirname, '/scripts/javascript.js'))
});

proxyRouter.get('/main-output.css', async (req, res) => {
  res.sendFile(path.join(__dirname, '/tailwind/main-output.css'))
});


proxyRouter.post('/chatgpt', async (req, res) => {
  console.log('sending to chatgpt from proxy')
  
  try {
    const api = new ChatGPTAPI({
      apiKey: process.env.OPENAI_API_KEY
    })
    const response = await api.sendMessage(req.body.message);
    console.log(response);
    res.status(200).json({ response: response.text});
  } catch (e) {
    console.log(e);
  }
});


/*
proxyRouter.post("/committext", async (req, res) => {
  console.log('COMMIT TEXT: ' + req.body.text)
  try {
    const { client } = await clientProvider.offline.restClient({
      shop: res.locals.user_shop,
    });

    //Get MAIN theme id:
    /*
    const getThemesResponse = await client.get({
      path: 'themes.json'
    });
    
    const themeId = getThemesResponse.body.themes.filter(({ role }) => role === "main")[0].id;
    where it went

    const getAssetsResponse = await client.get({
      path: 'assets.json'
    });
    let assets = getAssetsResponse.body.assets;
    assets = assets.filter((asset) => asset.key.includes('.json') && asset.key.includes('templates'));
    
    //GET SECTION ID AND BLOCK ID
    let sectionId = '';
    let correctAsset = '';
    for (let asset of assets) {
      const getAssetResponse = await client.get({
        path: `themes/${req.body.themeId}/assets.json?asset[key]=${asset.key}`,
      });
      
      const sections = JSON.parse(getAssetResponse.body.asset.value).sections;

      for (let sectionKey in sections) {
        console.log('.');
        if (sections[sectionKey].blocks) {
          const blocks = sections[sectionKey].blocks;

          for (let blockId in blocks) {
            if (blockId == req.body.blockId) {
              sectionId = sectionKey;
              correctAsset = asset.key;

              console.log('SECTION ID: ' + sectionId);
              console.log('BLOCK ID: ' + blockId);
              console.log('ASSET: ' + correctAsset);
            }
          }
        }
      }


    }

    console.log('made it here2 s')

    const getAssetResponse = await client.get({
      path: `themes/${req.body.themeId}/assets.json?asset[key]=${correctAsset}`,
    });
    console.log('made it here3 s')


    const asset = JSON.parse(getAssetResponse.body.asset.value);
    asset.sections[sectionId].blocks[req.body.blockId].settings.text = req.body.text;
    const newAssetString = JSON.stringify(asset);
    getAssetResponse.body.asset.value = newAssetString;
    

    const putAssetResponse = await client.put({
      path: `themes/${req.body.themeId}/assets.json`,
      data: {
        asset: {
          key: getAssetResponse.body.asset.key,
          value: newAssetString
        }
      },
      type: DataType.JSON
    });


    res.status(200).json({status: 'success'});
  } catch (e) {
    console.log(e);
    res.status(200).json({status: 'fail', error: e});
  }
  
//  res.status(200).end('countdata');
});*/


export default proxyRouter;
