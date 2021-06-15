function sum(x,y) {
    console.log(x*y);
}
sum_curry =  sum.bind(this,2);
sum_curry(4);

//____________________________________________________________________
// closure
function sum (x){
    return (y)=>{ console.log(x*y)};
}

sum_curry = sum(2);
sum_curry(4);
//____________________________________________________________________
// sum(1)(2)(3)...
sum = a => b =>{ return b ? sum(a+b) : a };
 // sum is a function which accepts b & if b exists, returns sum(a+b) or returns a .