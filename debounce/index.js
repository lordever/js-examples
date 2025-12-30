function debounce(func, delay) {
    let timeoutId;

    return function (...args) {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }

        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay)
    }
}

function printMessage(msg) {
    console.log(msg);
}

const debouncedPrintMessage = debounce(printMessage, 2000);
debouncedPrintMessage("Hello world!");