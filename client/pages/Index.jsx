import {
  AlphaCard,
  Page,
  Layout,
  VerticalStack,
  HorizontalStack,
  Box,
  Text,
  List,
  Button

} from "@shopify/polaris";



import axios from 'axios';

import { TitleBar, useAppBridge } from "@shopify/app-bridge-react";

import {useState, useCallback, useRef, useEffect} from 'react';

import { useAuthenticatedFetch } from "../hooks";

import { trophyImage } from "../assets";



import { ProductSelector } from '../components/ProductSelector';
import { ProductsCard } from '../components/ProductsCard';
import { ProductTest } from '../components/ProductTest';
import { ProductTextField } from '../components/ProductTextField';
import { ProductDescriptionEditor } from '../components/ProductDescriptionEditor';
import { ScriptToggle } from '../components/ScriptToggle';
import { OpenAIKeyStorer } from '../components/OpenAIKeyStorer'



export default function HomePage() {
  const fetch = useAuthenticatedFetch();

  
  const [active, setActive] = useState(true);

  const [shopName, setShopName] = useState(null);

  useEffect(() => {
    // Send a request to the server to retrieve the session data
    fetch('/apps/api/shop').then(async (response) =>  {
      // Update the shopName state variable with the shop name from the session data
      setShopName(await response.text());
    //  / console.log(shopName)
    });
  }, []);

  const handleChange = useCallback(() => setActive(!active), [active]);

  async function handlePrintScripts() {
    const response = await fetch('/apps/api/backend/printScripts');
    console.log(await response.json())
  }

  async function handleRemoveScripts() {
    const response = await fetch('/apps/api/backend/remove');
    console.log(await response.json())
  }

  async function handleAddScripts() {
    const response = await fetch('/apps/api/backend/addScriptsV2');
    console.log(await response.json())
  }

  const modal_activator = useRef();

  return (
    
    <Page narrowWidth>
      <TitleBar title="WriteBoost AI" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <AlphaCard>
            <VerticalStack gap={{xs: '4', sm: '5'}}>
              <Box width="100%">
                <VerticalStack gap={{xs: '2', sm: '4'}}>
                  <HorizontalStack align="space-between">
                    <Text variant="headingMd" as="h6">
                      Getting Started
                    </Text>
                    <Button target="_blank" url={`https://${shopName}/admin/themes/current/editor?context=apps&template=product&activateAppId=39799848961`}>Enable/Disable</Button>
                  </HorizontalStack>
                  
                  <List type="number">
                    <List.Item>
                      <Text variant="bodyMd" as="p">
                        Enable WriteBoost AI by clicking the "Enable/Disable" button above.
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text variant="bodyMd" as="p">
                      With WriteBoost AI now enabled, when you go to the Online Store Editor, you will see a circle button in the bottom right corner. Double clicking on text will cause the button to light up.
                      </Text>                    
                    </List.Item>
                    <List.Item>
                      <Text variant="bodyMd" as="p">
                      Click on the circle button to make the WriteBoost AI Prompt appear. If the button is lit up when you click on it, the focused text will appear in the prompt text box.
                      </Text>                    
                    </List.Item>
                    <List.Item>
                      <Text variant="bodyMd" as="p">
                      With the Prompt interface open, navigate through the range of functionalities offered by WriteBoost AI! Click on "New Prompt" to generate new text and "Copy" to copy the generated text to your clipboard.</Text>                    
                    </List.Item>

                    <List.Item>
                      <Text variant="bodyMd" as="p">
                        Enjoy!
                      </Text>     
                    </List.Item>
                  
                  </List>
                  
                  
                  
                </VerticalStack>
              </Box>
            </VerticalStack>
          </AlphaCard>
        </Layout.Section>

      </Layout>
    </Page>
  );
}


// TEST FUNCTIONS
/*
const getProducts = async () => {
    try {
      const response = await fetch('/api/2023-01/products.json');
      console.log(await response.json());

    } catch(err) {
      console.log(err);
    }
  }

  //getProducts();

  const updateProduct = async () => {
    try {
      const response = await fetch('/api/2023-01/products/8129604321555.json', { method: 'PUT' });
      console.log(response);
    } catch(err) {
      console.log(err);
    }
  }


  const genNewProductDescriptions = async () => {
    try {
      const response = await fetch('/api/2023-01/products.json');
      const products = await response.json();


      products.forEach(async (product) => {
        console.log('product 1: ');
        console.log(product);

        //Generate New Description
        const description = 'test description';

        const url = '/api/2023-01/products/' + product.id + '.json'

        console.log('test')
        const response = await fetch(url, { method: 'PUT' })

        console.log(response);

      })

    } catch(err) {
      console.log(err);
    }

  }
*/
