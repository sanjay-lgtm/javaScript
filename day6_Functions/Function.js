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


//Function execution context------------>
//Global Execution Context----------------------> VOlatile/Temporary variables
// function c(){
//     console.log("c");
// }
// function b(){
//     c();
//     console.log("b");
// }
// function a(){
//     b();
//     console.log("a")
// }
// console.log("Hi");
// a();

//callback function -------->

//Map, reduce ,filter,and foreach-->

//map --------->(itration)--------> will return new array.
//foreach -------> loop(repeatative task)(for itration)------> will not return new array.It is HOF.modify not an array.
//filter -------> will return new array.return filtered product.
//reduce------->will return only one value.
//sort----->perform the lexographical order.


//foreach -------------->
// let arr = [1, 2, 3, 4];

// function printValue(){
//     console.log(value);
// }
// arr.forEach((val,index,arr)=>{
//     console.log(val,index,arr);
// });
// arr.forEach(function(val,index,arr){
//     arr[index] = val*2;
//     console.log(arr);
//     // console.log(val,index,arr);
// });

//map-------->

// let newArr = arr.map(function (val, index, arr) {
//     return val * 2;
// });
// console.log(newArr);
// console.log(arr);

//filter----------->
// let arr = [1,2,3,4];

// let products = [
//     { name: 'apple', price: 5, rating: 3 },
//     { name: 'banana', price: 7, rating: 3.5 },
//     { name: 'orange', price: 3, rating: 2.5 },
//     { name: 'mango', price: 8, rating: 4 },
//     { name: 'grapes', price: 6, rating: 4.5 },
//     { name: 'kiwi', price: 10, rating: 4.9 },
//     { name: 'pinapple', price: 9, rating: 5 }
// ]

// let filteredArray = products.filter(function (value) {
//     // return value % 2 === 0;
//     return value.price > 5;
// })
// console.log(filteredArray);

//reduce--------->accumlator(acc,currVal,idx)------>current Value---Index of the array ------array itself
//price -> 0 + 5 ,5 + 7, 12 + 3,15 + 8 and so on == 48
//same as rating

// let sum = products.reduce(function (accumlator, currentvalue) {
//     return accumlator + currentvalue.price
// }, 0)
// console.log((sum));

// let arr = [-1,4,-10,5,9,-20,4];
// let sqaredArr = arr.map(function(num){
//     return Math.pow(num,2);
// })
// console.log(sqaredArr);


// let positiveNum = arr.filter(function(num){
//     return num > 0;
// })

// let ans = positiveNum.reduce(function(acc,cv){
//     return acc+cv
// },0)

// console.log(ans);


// let arr = 'Sanjay Sharma Web Developer';
// let arrString = arr.split(" ");
// // console.log(arrString);
// let newArr = arrString.map(function(val){
//     return val[0];
// })

// console.log(newArr.join(""));

// let person = [
//     {name:"sanjay",age:20},
//     {name:"sharma",age:26},
//     {name:"web",age:18},
//     {name:"developer",age:3},
//     {name:"java",age:7}
// ]


// let Ages = person.map(function(val){
//     return val.age;
// })
// let min = Math.min(...Ages)
// let max = Math.max(...Ages)
// console.log(min,max,(max-min));
// const students = [
//     { name: 'Hans', age: 3 },
//     { name: 'Ani', age: 7 },
//     { name: 'Budi', age: 10 },
//     { name: 'Lee', age: 13 }
//   ];
  
//   function getYoungestAge(data) {
//     // Initialize the minimum age to the age of the first student.
//     let minAge = data[0].age;
  
//     // Iterate over the rest of the students and update the minimum age if necessary.
//     for (let i = 1; i < data.length; i++) {
//       if (data[i].age < minAge) {
//         minAge = data[i].age;
//       }
//     }
  
//     // Return the minimum age.
//     return minAge;
//   }
  
//   // Get the youngest age.
//   const youngestAge = getYoungestAge(person);
  
//   // Print the youngest age.
//   console.log(youngestAge); // 3


