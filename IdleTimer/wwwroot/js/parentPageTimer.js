let timer = 0;  // the current time elapsed since last user activity (in milliseconds)
const timerInterval = 1000; // the timer ticks at this interval (in milliseconds)
const maxTime = 5000; // the maximum time before the idle warning is displayed (in milliseconds)

/**
 * Initializes the parent page timer by setting up event listeners and starting the timer interval.
 */
function initializeParentPageTimer() {
    setupParentPageEventListeners();
    setTimerInterval();
}

/**
 * Sets up event listeners to reset the timer on user activity.
 */
function setupParentPageEventListeners() {
    document.addEventListener('mousemove', resetTimer);
    document.addEventListener('keypress', resetTimer);
    document.addEventListener('click', resetTimer);
    document.addEventListener('scroll', resetTimer);
}

/**
 * Sets an interval to increment the timer and check for idle state.
 */
function setTimerInterval() {
    setInterval(() => {
        timer += timerInterval;
        if (timer > maxTime) {
            idleWarning();
        }
    }, timerInterval);
}

/**
 * Resets the timer to zero.
 */
function resetTimer() {
    timer = 0;
}

/**
 * Invokes a .NET method to update the idle warning message.
 */
function idleWarning() {
    DotNet.invokeMethodAsync('IdleTimer', 'UpdateIdleWarningMessage');
}
