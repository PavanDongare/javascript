oneSec = function () {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('1 sec function')
            res(1);
        }, (1000));
    })
}



twoSec = function () {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('2 sec function')
            rej(2);
        }, (2000));
    })
}

threeSec = function () {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('3 sec function')
            res(3);
        }, (3000));
    })
}

let promiseCustom = {
    all: (promises) => {
        return new Promise((res, rej) => {
            let results = [];
            let resCount = 0
            promises.forEach((p, index) => {
                p.then((promiseResult) => {
                    resCount++ ;
                    results[index] = promiseResult;
                    if (results.length === resCount)
                        res(results);
                }).catch((e) => {
                    rej(e);
                })
            });
        })
    },
}



promiseCustom.all([threeSec(), oneSec(), twoSec()]).then((v) => { console.log('done', v) })
    .catch((e) => { console.log('fail', e) });
