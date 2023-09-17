
if (document.querySelector('#OnlineStoreEditorData')) {
    let link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', '/apps/shopify-store-editor-ai-proxy/main-output.css')
    document.querySelector('body').appendChild(link);
}