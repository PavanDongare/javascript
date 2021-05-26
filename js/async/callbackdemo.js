// callback hell example 
function one_sec(p){
    setTimeout(() => {
        console.log('1 sec function')
    }, (1000));
}

 function two_sec(cb,p){
    setTimeout(() => {
        console.log('2 sec function')
        cb(p);
    }, (2000));
  
}

function three_sec(cb1,cb2,p){
    setTimeout(() => {
        console.log('3 sec function')
        cb1(cb2,p);
    }, (3000));
   
}
function callback(param) {console.log('callback ', param,'\n'); }

three_sec(two_sec,one_sec,3);