const { app, BrowserWindow } = require('electron');



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