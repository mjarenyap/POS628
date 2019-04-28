const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

let win;
function createInitialWindow() {
	win = new BrowserWindow({
		width: 900,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
			webSecurity: true
		}
	});
	win.setResizable(false);
	// win.webContents.openDevTools();
	// win.loadFile('src/index.html');

	win.loadURL(url.format({
		pathname: path.join(__dirname, 'src/index.html'),
		protocol: 'file',
		slashes: true
	}));
}

app.on("ready", createInitialWindow);

app.on("window-all-closed", () => {
	if(process.platform !== 'darwin')
		win.quit();
});

app.on("activate", () => {
	if(win === null)
		createInitialWindow();
});