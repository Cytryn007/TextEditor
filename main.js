var electron = require("electron");
var app = electron.app;
var win;
function handleSaveAction(e){
    e.preventDefault();
    var dialog = electron.dialog;
    dialog.showMessageBox({title: "warning"})

}
function createWindow(){
    win = new electron.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIintegration: true
        }
    })
    win.loadFile("index.html");
    // win.webContents.on('did-finish-load', function(){
    //     win.webContents.document.getElementById('saveButton').addEventListener('click', handleSaveAction)
    // })
    
 
}
app.on('ready', createWindow);

