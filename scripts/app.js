document.body.onkeydown = function(event) {
    if (event.keyCode === 73 && event.shiftKey === true && event.ctrlKey === true) {
        event.preventDefault()
    }
}