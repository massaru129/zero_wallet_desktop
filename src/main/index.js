const {
    app,
    BrowserWindow
} = require('electron')
// const zerochain = require('../../zerochain');
// console.log(zerochain.hoge(), " from main process")

const log = require('electron-log');

let win

if (module.hot) {
    module.hot.accept();
}

function createWindow() {
    log.warn("hogehoge");
    win = new BrowserWindow({
        width: 1080,
        height: 720,
        webPreferences: { nodeIntegration: true }
    })
    win.loadFile('../index.html')
    if (process.env == "development") {
        win.webContents.openDevTools()
    }
    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
});
