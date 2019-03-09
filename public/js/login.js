const loginInput = document.getElementById("login-input");
const loginButton = document.getElementById("login-button");
const {ipcRenderer} = require('electron');

class EventMessage {
    constructor(type, payload) {
        this.type = type;
        this.payload = payload;
    }
}
ipcRenderer.on('asynchronous-reply', (e,messageFromServer)=>{
    console.log('Message from server: ' + JSON.stringify(messageFromServer));
    if (messageFromServer.payload === 'index.html') {
        window.location = messageFromServer.payload;
    }
});

loginButton.addEventListener('click', ()=> {
    ipcRenderer.send('asynchronous-message',  new EventMessage('login', {user: loginInput.value}));
});