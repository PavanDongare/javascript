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
            res(2);
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

funcRefs = [oneSec,twoSec,threeSec];

const startPromise = function(){ Promise.resolve(null); }

let acc = (acc,val)=>{
    val.then()
}


let a = funcRefs.reduce((result,promiseFn)=>{
    return result.then(()=>{
        return promiseFn();
    })
}, Promise.resolve() );


