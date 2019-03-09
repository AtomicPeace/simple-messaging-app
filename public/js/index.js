
const input = document.getElementById("message-input-box");
const sendButton = document.getElementById("message-send-button");
const clock = document.getElementById("clock");
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

setInterval(()=>{
    const date = new Date();
    clock.innerText = `${date.getHours()% 12}:${date.getMinutes()}:${date.getSeconds()} :: ${date.getMilliseconds()}`;
}, 10)