function delayWithTimeout(ms, callback) {
    setTimeout(callback, ms);
}

function delayWithPromise(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

delayWithTimeout(2000, () => {
    console.log("Hello after 2 seconds");

    delayWithPromise(2000)
        .then(() => {
            console.log("Hello after 4 seconds");

            delayWithPromise(2000).then(() => {
                console.log("Hello after 6 seconds");
            })
        })
});

