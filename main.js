// ========== Electron ==========
const { app, BrowserWindow } = require('electron')
const server = require('./app');

let win
const createWindow = () => {
	win = new BrowserWindow({
		width: 1920,
		height: 1080,
		webPreferences: {
			nodeIntegration: true
		}
	})

	win.loadURL('http://localhost:3000')
	win.on('closed', function () {
		win = null
	})
}

app.whenReady().then(() => {
	createWindow()

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});
})

app.on('resize', function (e, x, y) { app.setSize(x, y); });
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit() })
