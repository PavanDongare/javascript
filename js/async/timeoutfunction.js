function one_sec(){
    setTimeout(() => {
        console.log('1 sec function')
    }, (1000));
}

 function two_sec(){
    setTimeout(() => {
        console.log('2 sec function')
    }, (2000));
  
}

function three_sec(){
    setTimeout(() => {
        console.log('3 sec function')
    }, (3000));
   
}

three_sec();
one_sec();
two_sec();