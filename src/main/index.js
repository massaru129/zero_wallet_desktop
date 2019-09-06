const {
    app,
    BrowserWindow
} = require('electron')
const zerochain = require('../../zerochain');
console.log(zerochain.hoge(), " from main process")


let win

if (module.hot) {
    module.hot.accept();
}

function createWindow() {
    win = new BrowserWindow({
        width: 1080,
        height: 720,
        webPreferences: { nodeIntegration: true }
    })
    win.loadFile('../index.html')
    if (process.argv.find((arg) => arg === '--debug')) {
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
