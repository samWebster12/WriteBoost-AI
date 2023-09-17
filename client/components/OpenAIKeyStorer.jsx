import {
    Card,
    TextContainer,
    Stack,
    Heading,
    Button,
    TextField
  } from "@shopify/polaris";

  import {useState, useCallback} from 'react';
  import { useAuthenticatedFetch } from "../hooks";

  
export function OpenAIKeyStorer() {
    const fetch = useAuthenticatedFetch();


    const [openAIKeyValue, setOpenAIKeyValue] = useState('');

    const [currentOpenAiKey, setCurrentOpenKey] = useState('');


    async function handleSubmitOpenAIKey() {
        const response = await fetch('/apps/api/backend/storeOpenAIKey', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ openAIKeyValue })
        });

        
        setCurrentOpenKey((await response.json()).openAIKey)
        
    }

    (async () => {
        try {
            const getOpenAIKeyResponse = await fetch('/apps/api/backend/getOpenAIKey');
            //console.log(await getOpenAIKeyResponse.json())
            setCurrentOpenKey((await getOpenAIKeyResponse.json()).openAIKey)

        } catch (e) {
            console.log(e);
        }
        
    })();

    return (
        <Card sectioned>
            <Stack
            wrap={false}
            spacing="extraTight"
            distribution="trailing"
            alignment="center"
            >
                <Stack.Item fill>
                <TextContainer spacing="loose">
                    <Heading> Enter Open AI Key </Heading>
                    <TextField
                        label="Open AI Key"
                        value={openAIKeyValue}
                        autoComplete="off"
                        onChange={setOpenAIKeyValue}
                    />
                    <Button onClick={handleSubmitOpenAIKey}>Submit</Button>
                    <p>Current Open AI Key: {currentOpenAiKey}</p>
                </TextContainer>
            </Stack.Item>
            
            </Stack>
        </Card>
    );
}





