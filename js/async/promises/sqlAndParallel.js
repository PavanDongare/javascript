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


let seq = funcRefs.reduce((result,promiseFn)=>{
    return result.then(()=>{
        return promiseFn();
    })
}, Promise.resolve() );



oneSecP = function () {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('1 sec parallel function')
            res(1);
        }, (1000));
    })
}



twoSecP = function () {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('2 sec parallel function')
            res(2);
        }, (2000));
    })
}

threeSecP = function () {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('3 sec parallel function')
            res(3);
        }, (3000));
    })
}


parallel =  new Promise ((res,rej)=>{
    let seq =()=>{
        return funcRefs.reduce((result,promiseFn)=>{
            return result.then(()=>{
                return promiseFn();
            })
        }, Promise.resolve() );
    }
    
    Promise.all([oneSecP(),twoSecP(),threeSecP(),seq()]).then(()=>{
        console.log('seq & parallel complete')
    });
})
