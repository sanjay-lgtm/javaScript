// console.log("Start")

// function operation1(){
//     console.log("Operation 1 startted")
//     for(let i=0;i<1000000000;i++){

//     }
//     console.log("Operation 1 ended");
// }

// function operation2(){
//     console.log("Operation 2 startted")
//     for(let i=0;i<1000000000;i++){

//     }
//     console.log("Operation 2 ended");
// }

// function operation3(){
//     console.log("Operation 3 startted")
//     for(let i=0;i<1000000000;i++){

//     }
//     console.log("Operation 3 ended");
// }

// function delay(){
//     setInterval(() => {
//         console.log("Hello");
//     },2000)
// }
// delay()
// console.log("end")

// let count = 10;
// console.log(count)

// function countDown() {
//     let intervalId = setInterval(function () {
//         count--;
//         console.log(count)
//         if (count === 0) {
//             clearInterval(intervalId)
//         }
//     }, 1000)

// }
// countDown()

// function printMe(){
//     console.log("print Me")
// }


// function setTimeOutFunc(){
//     setInterval(()=>{
//    for(let i=0;i>=0;i--){
//     console.log(i);
//    }
//    },1000)
// }
// setTimeOutFunc()

// function setTimeOutFunc(){
//     console.log("I am from setTimeOut")
// }
// let timer = setTimeout(() => {

// }, timeout);

// function setTime(){
//     console.log("I am from setInterval")
//     clearInterval(timer)
// }
// let timer = setInterval(setTime,1000);



//Evevt loop ------->

// function f1(){
//     console.log("f1")
// }
// function  f2(){
//     console.log("f2");
// }
// function main(){
//     console.log("main")
//     setTimeout(f1,0);
//     f2()
// }
// main();

//javascript can perform asyncronous program through the help of browser.


//callback queue --->\
//Micro task  queue -->\
//Macro  task queue / Task Queue--->>


// console.log("Begin EC 1");

// const fun = () =>{
//     console.log("EC2 begin")
//     queueMicrotask(function(){
//         console.log('iiner mt')
//     })
// }

// const fun2 = () => {
//     console.log("EC3 begin")
   
//     const fun3 = () => {
//         queueMicrotask(function(){
//             console.log("inner mt2")
//         })
//     }
//     fun3()
// }
// fun2();
// fun();
// console.log("EC 1end")

f()
//print 1
console.log("con 1")

setTimeout(() => {

    //print 4
    console.log("con 2");
    //print 5
    queueMicrotask(function(){
        console.log("con 3")
    })
    console.log("Hello")
},2000)

setTimeout(function(){
    console.log("con 4")
},2000)

setTimeout(function(){
    console.log("con 6")
},10000)

//pending ---> print 3


function f(){
    queueMicrotask(function(){
        console.log("con 5")
    })
}

console.log("finish")// print 2