//A JavaScript function is a block of code designed to perform a particular task.
//A JavaScript function is executed when "something" invokes it (calls it).

// function declaration
// function sum(a,b){
    // console.log("sum is " +(a+b));
    // console.log(`sum is ${a+b}`);
    // return a+b;
// }
// function calling
// let ans = sum(20,30);
// console.log(ans);
// sum(20)

//Anonymous function which is having no name.
//functtion expression
// let add = function  (a,b){
//     console.log(a+b)
// }
// add(1,3);
// console.log(add);

// Higher order function (HOF) --------->  A function that accepts another function as an argument and returns a new function.

// function getCapture(camera){
//     console.log(camera)
//     camera();
// }
// function cameraName(){
//     console.log('Nikon')
// }
// getCapture(cameraName);

// function returnFun(){
//     return function(){
//         console.log('Hii!!');
//     }
// }
// let ans = returnFun();
// ans();
// console.log(ans);

// Arrow function ------------> to reduce time.

// let add = (a,b) => {
//     return a+b;
// }
// console.log(add(4,5));

//IIFE ----> Immediately Invoked Function Expression
//avoid IIFE to intoduce let and const.

// (function () {
//     console.log('IIFE');
// })()

// var b=10
// function print(){
//     const b=8;
//     console.log(b);
// }
// print()
// console.log(b)

// var a = 8;
// ((a) =>{ 
//     a =10;
//     console.log(a);
// })(a)
// console.log(a);

//Exection context ---------->
