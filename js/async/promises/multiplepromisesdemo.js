// promise chaining - 

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


// run one after another

threeSec().then(() => {
    twoSec().then(() => {
        oneSec();
    })
})


// inform when all are done
Promise.all([threeSec(),twoSec(),oneSec()])
.then((val)=>{ console.log('all done',val)})
.catch((e)=>{console.log('one fail',e)});

