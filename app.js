const { BrowserWindow } = require("electron");

const { remote } = require('electron')
win = remote.getCurrentWindow()

document.getElementById("close-app").onmouseup = function() {
    window.close()
};
document.getElementById("maximize-app").onmouseup = function() {
    if (win.isMaximized()) {
        win.setSize(800, 600);
    } else {
        win.maximize()
    }
}
document.getElementById("minimize-app").onmouseup = function() {
    win.minimize()
};