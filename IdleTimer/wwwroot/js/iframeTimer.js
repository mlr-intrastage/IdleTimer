function initializeIframeTimer() {
    var iFrame = document.getElementById('myIFrame');
    if (iFrame && iFrame.contentWindow) {
        console.log("REGISTERING");
        iFrame.contentWindow.addEventListener('mousemove', resetTimer);
        iFrame.contentWindow.addEventListener('keypress', resetTimer);
        iFrame.contentWindow.addEventListener('click', resetTimer);
        iFrame.contentWindow.addEventListener('scroll', resetTimer);
    }
}
