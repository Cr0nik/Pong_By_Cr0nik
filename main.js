const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 620,
    height: 460,
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})