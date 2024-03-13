// console.log("Hello")
// setTimeout(function(){
//     console.log("this will execute after some time")
// },2000);

// function cheese(callback) {
//     setTimeout(function () {
//         let cheese = "gouda";
//         console.log(`I like ${cheese}`)
//         callback(cheese)
//     }, 2000);
// }
// function dough(cheese, callback) {
//     setTimeout(function () {
//         let dough = cheese + " dough";
//         console.log("here is the dough ", dough)
//         callback(dough)
//     }, 2000);
// }
// function bakepiza(dough, callback) {
//     setTimeout(function () {
//         let pizza = dough + " pizza";
//         console.log("here is the pizza ", pizza)
//         callback(pizza)
//     }, 2000);
// }
// cheese((cheese) => {
//     dough(cheese, (dough) => {
//         bakepiza(dough, (pizza) => {
//             console.log("That's all for now! Here is your " + pizza + ". Enjoy!");
//         })
//     })
// })


/*callback hell-----> when  we have nested functions that call each other and pass results as arguments to the next function in a long */


//signup -> login -> feed -> search -> profile -> follow


//promises ----->  just a object to execute a async. task that indicate success and failure status of obj.


// let loggedIn = true;
// let promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         if (loggedIn) {
//             res('You are successfully Logged In');
//         } else {
//             rej('Login Failed')
//         }
//     }, 2000)
// })
// promise.then((msg) => {
//     console.log(msg);
// })
//     .catch((msg) => {
//         console.log(msg)
//     })
// console.log(promise);

// .then() && .catch() keyword---> used to handle the result of promise and also return promise



// function cheese() {
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             let cheese = ' amul cheese'
//             res(cheese)
//         },1000)
//     })
// }
// function dough(cheese) {
//     return new Promise((res) => {
//         setTimeout(() => {
//             let dough = cheese + ' dough'
//             res(dough)
//         },1000)
//     })
// }
// function bakepiza(dough) {
//     return new Promise((res) => {
//         setTimeout(() => {
//             let pizza = dough+' pizza'
//             res(pizza)
//         },1000)
//     })
// }

// cheese()
// .then((cheese) => {
//     console.log(cheese);
//     return dough(cheese)
// })
// .then((dough) => {
//     console.log(dough);
//     return  bakepiza(dough)
// })
// .catch((pizza) => {
//     console.log(pizza+" is not available")

// })
// cheese((cheese) => {
//     dough(cheese, (dough) => {
//         bakepiza(dough, (pizza) => {
//             console.log("That's all for now! Here is your " + pizza + ". Enjoy!");
//         })
//     })
// })


// const promise1 = fetch('https://fakestoreapi.com/products', {
//     method: 'GET',
//     headers: {
//         'Cotent-Type': 'application/json'
//     }
// })

// promise1
// .then((res) => {
//     const promise2 = res.json()
//     promise2
// })
// console.log(promise1(data))
// promise1.then((res)=>{
//    const promise2  = res.json()
// })

//Write a javascript function takes a callback and invokes it after a delay of 2 second.

// setTimeout(() => {

// },2000)
//Write a javascript program that converts a callback

// let i=0;
// let x=0;
// for(var i=0;i<5;i++){
//     //  x=i+1;
//     setTimeout(() => {
//         console.log(i)
//     }, 0);
// }

// var y=10
// function f(){
//     var y=20
//     if(true){
//          y=30;
//     }
//     console.log(y)
// }
// var y=40
// f()
// console.log(y)

// for(var i=0;i<5;i++){
//     setTimeout(() => {
//         console.log(i);
//     },0)
// }


// for(let i=0;i<5;i++){
//     setTimeout(() => {
//         console.log(i);
//     },0)
// }


// function d1(resolve,reject) {
//     setTimeout(()=>{
//         resolve(30)
//     })

// }
// function d2(resolve,reject) {
//     setTimeout(()=>{
//         resolve(50)
//     })


// }
// function d3(resolve,reject) {
//     setTimeout(()=>{
//         resolve(70)
//     })


// }

// new Promise(d1)
//     .then(data => {
//         console.log(data)
//         return new Promise(d2)
//     })
//     .then(data => {
//         console.log(data)
//         return new Promise(d3)
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err=>{
//         console.log(err)
//     })

// function fetchgoogleData(resolve, reject) {
//     setTimeout(() => {
//         resolve(30)
//     }, 3000)

// }
// function fetchfacebook(resolve, reject) {
//     setTimeout(() => {
//         resolve(50)
//     }, 5000)

// }

// new Promise(fetchgoogleData)
//     .then(googleData => {
//         console.log(googleData)
//         return new Promise(fetchfacebook)
//     })
//     .then(facebookData => {
//         console.log('Facebook Data:', facebookData);
//     })
//     .catch((err) => {
//         console.error("Error", err)
//     })


    
// function d1(){
//     console.log("m1")
// }
// setTimeout(()=>{
//     queueMicrotask(()=>{
//         console.log("Hi micro mini")
//     })
//     console.log("hello")
// },0)
// queueMicrotask(d2)
// new Promise((resolve,reject)=>{
//     resolve(30)
// })
// .then(data =>{
//     console.log(data)
// })
// function d2(){
//     console.log("m2")
// }

// queueMicrotask(d1)

// for(let i=0;i<10;i++){
//     console.log(i)
// }

// new Promise((resolve,reject) => {
//     resolve(30)
// })