/**
 * Initializes the iframe timer by setting up event listeners.
 */
function initializeIframeTimer() {
    setupIframeEventListeners();
}

/**
 * Sets up event listeners for user activity within the iframe.
 * These events include mouse movement, key presses, clicks, and scrolling.
 */
function setupIframeEventListeners() {
    document.addEventListener('mousemove', postMessageIframeToParent);
    document.addEventListener('keypress', postMessageIframeToParent);
    document.addEventListener('click', postMessageIframeToParent);
    document.addEventListener('scroll', postMessageIframeToParent);
}

/**
 * Posts a message to the parent window indicating user activity within the iframe.
 */
function postMessageIframeToParent() {
    window.parent.postMessage('iframe-user-active', '*');
}