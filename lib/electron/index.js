const { app, BrowserWindow, ipcMain } = require('electron');

ipcMain.on('asynchronous-message', (event, arg) => {
    console.log(arg.payload); // prints "ping"
    event.sender.send('asynchronous-reply', {payload: 'me   ssage successfully sent'})
})

ipcMain.on('synchronous-message', (event, arg) => {
    console.log(arg); // prints "ping"
    event.returnValue = {payload: 'message successfully sent'}
})

function createWindow() {
    let win = new BrowserWindow({width: 800, height: 800});
    win.loadFile('./public/index.html');
    // win.webContents.openDevTools({mode: 'undocked'});
}


module.exports = {
    init: function init() {
        app.on('ready', createWindow);
    }
};