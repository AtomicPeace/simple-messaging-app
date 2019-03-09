
const input = document.getElementById("message-input-box");
const sendButton = document.getElementById("message-send-button");
const {ipcRenderer} = require('electron');


ipcRenderer.on('asynchronous-reply', (e,messageFromServer)=>{
   console.log('Message from server: ' + JSON.stringify(messageFromServer))
});

input.addEventListener('keyup', (event)=>{

    if (event.key === 'Enter') {
        sendButton.click();
    }
    
});

sendButton.addEventListener('click', (e)=>{
    console.log({payload: input.value});
    ipcRenderer.send('asynchronous-message',  {payload: input.value});
});