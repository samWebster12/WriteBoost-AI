
if (document.querySelector('#OnlineStoreEditorData')) {

    let link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'https://bda5292cbb82.ngrok.app/tailwind/main-output.css')
    document.querySelector('body').appendChild(link);
}