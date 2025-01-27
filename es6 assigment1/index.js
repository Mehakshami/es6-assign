// this is global scope
var names="mehak"
if(true){
    console.log (names)
}
// output:Mehak

// block level
let fullName = "mehak shami";
if(true){
    let fullName = 'parveen';
    console.log(fullName); // output:parveen
}

// this is  hoisting 
console.log(a);
var a;//undefined

// this is hosting example question
for(var i=0;i<10;i++){
    setTimeout(() => {
       console.log(i) 
    }, 2000);
}
// this is let block scope 
for(let i=0;i<10;i++){
    setTimeout(() => {
       console.log(i) 
    }, 2000);
}

// this is default parameters  solve 1
function add(a,b=10,c=50){
    return a+b+c;
}
console.log(add(10));


// this is default parameters  solve 2:
let my = 'shami';
let pixc = 'mehak';
console.log(my + pixc);

// templeate literals
// old version
let quote ="either you run the code or code runs you";
let by ="mehak shami"
console.log("either you run the code or code runs you"+""+by+""+
    "mehak shami")
    
    console.log(`either you run the code or code runs you
        ${by} hello`)
    