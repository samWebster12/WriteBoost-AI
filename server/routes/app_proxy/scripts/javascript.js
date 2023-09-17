let enabled;
if (document.querySelector('#OnlineStoreEditorData')) {
    enabled = true;
} else {
    enabled = false;
}


const originalFontSize = document.querySelector('html').style.fontSize;
let modalDisplaying = false;
let focusedEle;


function handleAIBoxClick() {

    if (!modalDisplaying) {
        document.querySelector('#shopify-store-editor-ai-modal').style.display = 'block';
        modalDisplaying = true;
        document.querySelector('html').style.fontSize = '100%';
        
        if (focusedEle != '') {
            if (focusedEle) {
                document.querySelector('#current-text').value = focusedEle.innerText;
            }
        }

    } else {
        document.querySelector('#shopify-store-editor-ai-modal').style.display = 'none';
        modalDisplaying = false;
        document.querySelector('html').style.fontSize = originalFontSize;
        document.querySelector('#body1').style.display = 'block';
        document.querySelector('#body2').style.display = 'none';
        document.querySelector('#current-text').value = '';
    }
}


function hasDataShopifyEditorBlock(ele) {
    let hasDataShopifyEditorBlock = false;
    for (let i = 0; i < 3; i++) {
        if (ele.getAttribute('data-shopify-editor-block')) {
            hasDataShopifyEditorBlock = true;
            break;
        }
        ele = ele.parentNode;
    }

    return {hasDataShopifyEditorBlock, ele}
}

function hasDataLiveTextSetting(ele) {
    let hasDataLiveTextSetting = false;
    for (let i = 0; i < 3; i++) {
        if (ele.getAttribute('data-live-text-setting')) {
            hasDataLiveTextSetting = true;
            break;
        }
        ele = ele.parentNode;
    }

    return {hasDataLiveTextSetting, ele}
}

function copyText() {
    // Select the email link anchor text
    const generatedTextElement = document.querySelector('#current-text');
    /*var range = document.createRange();
    range.selectNode(emailLink);
    window.getSelection().addRange(range);*/

    generatedTextElement.focus();
    generatedTextElement.select();


    try {
        console.log('COPY')
        // Now that we've selected the anchor text, execute the copy command
        const successful = document.execCommand('copy');
        const tooltip = document.getElementById("shopify-store-editor-ai-tooltip");

        if (successful) {
            console.log('TOOLTIP')
            tooltip.classList.add('active');
            setTimeout(() => {
                tooltip.classList.remove('active');
            }, 1500);
        }

        const msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copy email command was ' + msg);
    } catch(err) {
        console.log('Oops, unable to copy');
    }

    // Remove the selections - NOTE: Should use
    // removeRange(range) when it is supported
    //window.getSelection().removeAllRanges();
}

function changeInstructions(e) {
    let instructionPrefix = e.children[0].innerText;
    document.querySelector('#ai-instructions').value = instructionPrefix.substring(0, instructionPrefix.indexOf('...')) + ' ';
    document.querySelector('#ai-instructions').focus()
}

async function toneDropdownChange() {
    const prefix = document.querySelector('#tone-dropdown').value;
    await generateText(prefix); 
    document.querySelector('#tone-dropdown').value = 'Change tone';
}

async function translateDropdownChange() {
    const prefix = document.querySelector('#translate-dropdown').value;
    await generateText(prefix);
    document.querySelector('#translate-dropdown').value = 'Translate to';
}

async function generateButtonClick() {
    document.querySelector('#body2').style.display = 'none';
    document.querySelector('#body1').style.display = 'block';

    const message = document.querySelector('#ai-instructions').value

    await generateText(message, true);
    document.querySelector('#ai-instructions').value = '';
}

async function generateText(prefix, newPrompt) {
    let message;
    if (newPrompt) {
        message = prefix;
    } else {
        message = prefix + document.querySelector('#current-text').value;
    }

    document.querySelector('#body1').style.display = 'none';
    const spinnerContainer = document.createElement('div');
    spinnerContainer.className = 'shopify-store-editor-ai-lds-roller-container';

    const spinner = document.createElement('div');
    spinner.className = 'shopify-store-editor-ai-lds-roller';
    spinner.innerHTML = `<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>`;

    spinnerContainer.appendChild(spinner)
    document.querySelector('#form-box').appendChild(spinnerContainer);


    try {
        console.log('SENDING TO CHATGPT')
        let responseMessage;
        try {
            console.log(message);

            const response = await fetch('/apps/shopify-store-editor-ai-proxy/chatgpt', {
                method: 'POST',
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify({message}),
                timeout: 12000

            });
            
            const responseObj = await response.json();
            responseMessage = responseObj.response;

            console.log(responseMessage);

        } catch (e) {
            if (e.name === 'AbortError') {
                responseMessage = 'Error: Server timeout. AI took too long to respond. Try reloading the page or trying again later.'
            }
            console.log('ERROR: ' + e)

        }

        spinner.remove();
        spinnerContainer.remove();

        //Get whats in the quotes
        if (responseMessage.includes('"')) {
            console.log(responseMessage)
            responseMessage = responseMessage.substring(responseMessage.search('"')+1, responseMessage.length);
            console.log(responseMessage)
            console.log(responseMessage.search('"'))
            responseMessage = responseMessage.substring(0, responseMessage.search('"'));
            console.log(responseMessage)

        }

        document.querySelector('#current-text').value = responseMessage;
        document.querySelector('#body1').style.display = 'block';
        
    } catch (e) {
        console.log(e);
    }  
}

async function saveText() {

    const text = document.querySelector('#shopify-store-editor-ai-generated-text').value;
    console.log(text);
    //Get Theme ID
    let storeEditorDataText = document.querySelector('#OnlineStoreEditorData').textContent
    storeEditorDataText = storeEditorDataText.substring(storeEditorDataText.search('theme_id'), storeEditorDataText.length);
    storeEditorDataText = storeEditorDataText.substring(0, storeEditorDataText.search('"'));
    const themeId = storeEditorDataText.substring(storeEditorDataText.search('=') + 1, storeEditorDataText.length)

    //Get Section ID
    console.log(focusedEle);
    
    let dataLiveTextSetting;
    let dataShopifyEditorBlock;
    let sectionId;
    let blockId;
    if (dataShopifyEditorBlock = focusedEle.getAttribute('data-shopify-editor-block')) {
        const blockInfo = JSON.parse(dataShopifyEditorBlock);
        blockId = blockInfo.id;
        console.log(blockInfo);

    } else if (dataLiveTextSetting = focusedEle.getAttribute('data-live-text-setting')) {
        dataLiveTextSetting = dataLiveTextSetting.substring(dataLiveTextSetting.search('__')+2, dataLiveTextSetting.lastIndexOf('.'));
        dataLiveTextSetting = dataLiveTextSetting.substring(dataLiveTextSetting.search('__')+2, dataLiveTextSetting.lastIndexOf('.'));
        sectionId = dataLiveTextSetting.substring(0, dataLiveTextSetting.search('.block'));
        blockId = dataLiveTextSetting.substring(dataLiveTextSetting.search('.block')+7, dataLiveTextSetting.length);
    }

    console.log('SECTION ID: ' + sectionId);
    console.log('BlOCK ID: ' + blockId);
    console.log('THEME ID: ' + themeId)

    try {
        const response = await fetch('/apps/shopify-store-editor-ai-proxy/committext', {
            method: 'POST',
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({text, themeId, blockId, sectionId })
        });
        
        const responseJSON = await response.json();
        console.log(responseJSON);

        if (responseJSON.status == 'success') {
            const heading = document.createElement('p');
            heading.style.cssText = 'font-weight:600';
            heading.style.textAlign = 'center';
            heading.innerHTML = 'Refresh to See Changes!';
            document.querySelector('.shopify-store-editor-ai-form').appendChild(heading);
        }
        else {
            console.log('NO RELOAD')
        }

    } catch (e) {
        console.log('ERROR: ' + e)
    }


}

if (enabled) {
     //ADD EVENT LISTENER TO ALL ELEMENTS
    
    //
    /*
    document.addEventListener('mouseover', (e) => {
        e = e || window.event;
        var target = e.target || e.srcElement,
            text = target.textContent || target.innerText;
        
        const checkhasDataLiveTextSetting = hasDataLiveTextSetting(target);
        if (checkhasDataLiveTextSetting.hasDataLiveTextSetting && checkhasDataLiveTextSetting.ele != focusedEle) {
            console.log(i + '. HAS DATA TEXT LIVE SETTING');
            console.log(checkhasDataLiveTextSetting.ele)
            focusedEle = checkhasDataLiveTextSetting.ele;
            i++;
        }
    })*/
    
    
    document.addEventListener('click', function(e) {
    
        e = e || window.event;
        let target = e.target || e.srcElement;
    
        const checkHasDataShopifyEditorBlock = hasDataShopifyEditorBlock(target);
        const classList = Array.from(target.classList);
        if (enabled && classList.includes('shopify-store-editor-ai-activate-button') || target.id == 'shopify-store-editor-ai-modal-close-button' || target.id == 'shopify-store-editor-ai-modal-close-button-svg' || target.id == 'shopify-store-editor-ai-modal-close-button-svg-path') {
    
            handleAIBoxClick();
        } else if (enabled && target.id == 'new-prompt-button') {
            document.querySelector('#body1').style.display = 'none'
            document.querySelector('#body2').style.display = 'block'
        }
        else if (enabled && checkHasDataShopifyEditorBlock.hasDataShopifyEditorBlock && document.querySelector('#shopify-store-editor-ai-modal').style.display != 'block') {
            document.querySelector('.shopify-store-editor-ai-activate-button').classList.add('shopify-store-editor-ai-activate-button-element-clicked');
            focusedEle = checkHasDataShopifyEditorBlock.ele;
        //  document.querySelector('.shopify-store-editor-ai-activate-button').style.display = 'block';
        } else if (enabled && !checkHasDataShopifyEditorBlock.hasDataShopifyEditorBlock && document.querySelector('#shopify-store-editor-ai-modal').style.display != 'block') {
            focusedEle = '';
            document.querySelector('.shopify-store-editor-ai-activate-button').classList.remove('shopify-store-editor-ai-activate-button-element-clicked');
    
        //    document.querySelector('.shopify-store-editor-ai-activate-button').style.display = 'none';
    
        }
        
    }, false);
    /*
    document.addEventListener('mouseover', (e) => {
        e = e || window.event;
        var target = e.target || e.srcElement,
            text = target.textContent || target.innerText;
        if (target.tagName == 'A') {
            console.log(target)
        }
    })*/
}


