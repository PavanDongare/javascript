a  = new Promise((res,rej)=>{
    rej();
})
let acc = [];
let rej = [];
a.then((x)=>{
    acc.push(x);
}).catch((x)=>{
   rej.push(x);
})


console.log(acc,'\n',rej);
