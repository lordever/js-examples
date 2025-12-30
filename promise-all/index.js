class MyPromise {
    static all(promises) {
        const result = [];
        let resultCount = 0;

        return new Promise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                promises[i]
                    .then((data) => {
                        result[i] = data;
                        resultCount++;

                        if (resultCount === promises.length) {
                            resolve(result);
                        }
                    })
                    .catch((e) => reject(e));
            }
        });
    }
}

const promise1 = new Promise((r) => {
    setTimeout(() => {
        r("First promise has been resolved")
    }, 3000)
})

const promise2 = new Promise((r) => {
    setTimeout(() => {
        r("Second promise has been resolved")
    }, 300)
})

const promise3 = new Promise((r) => {
    setTimeout(() => {
        r("Third promise has been resolved")
    }, 2000)
})

MyPromise
    .all([promise1, promise2, promise3])
    .then(([r1, r2, r3]) => {
        console.log(r1);
        console.log(r2);
        console.log(r3);
    })