if (document.querySelector('#OnlineStoreEditorData')) {
    
    (async () => {
        const response = await fetch('https://bda5292cbb82.ngrok.app/tailwind/main.html');
        const html = await response.text();

        let box = document.createElement('div')
        box.innerHTML = html;
        document.querySelector('body').appendChild(box);

    })();
}