var undoli = []
var redoli = []
undoli.push(gettext())
text.focus()

setInterval(function() {
    document.getElementById("main").style.height = window.innerHeight - 130 + "px"
    text.style.height = window.innerHeight - 130 + "px"
    var isf = text === document.activeElement
    if (isf == true) {
        document.getElementById("main").style.boxShadow = "0 0 30px lightgrey"
    } else {
        document.getElementById("main").style.boxShadow = "0 0 10px lightgrey"
    }
}, 50);

function undo() {
    redoli.push(gettext())
    const lastundo = undoli.pop()
    if (lastundo != undefined) {
        settext(lastundo)
    }
}
function redo() {
    const lastredo = redoli.pop()
    if (lastredo != undefined) {
        settext(lastredo)
    }
}