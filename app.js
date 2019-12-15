const { app, BrowserWindow } = require('electron');

const APP_NAME = 'NG Memory Game';

let mainWindow = null;

function createWindow () {
  const windowOptions = {
    height: 840,
    minWidth: 680,
    title: APP_NAME,
    webPreferences: {
      nodeIntegration: true
    },
    width: 840,
  };

  mainWindow = new BrowserWindow(windowOptions);
  mainWindow.loadURL('http://localhost:8080');

  mainWindow.on('closed', () => {
    mainWindow = null;
  })
}

app.on('ready', createWindow);

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
