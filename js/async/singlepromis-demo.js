even_promise = new Promise((res,rej)=>{
    let temp = Math.floor(Math.random() * (10 - 1)) + 1;
    if(temp%2===0) res(true);
    else rej(`generated no is odd, ${temp}`);
})

even_promise.then((val)=>{  console.log( "got" , val)})
            .catch((val)=> { console.log(val)})
