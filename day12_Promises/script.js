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



function cheese() {
    return new Promise((res,rej) => {
        setTimeout(() => {
            let cheese = ' amul cheese'
            res(cheese)
        },1000)
    })
}
function dough(cheese) {
    return new Promise((res) => {
        setTimeout(() => {
            let dough = cheese + ' dough'
            res(dough)
        },1000)
    })
}
function bakepiza(dough) {
    return new Promise((res) => {
        setTimeout(() => {
            let pizza = dough+' pizza'
            res(pizza)
        },1000)
    })
}

cheese()
.then((cheese) => {
    console.log(cheese);
    return dough(cheese)
})
.then((dough) => {
    console.log(dough);
    return  bakepiza(dough)
})
.catch((pizza) => {
    console.log(pizza+" is not available")
  
})
// cheese((cheese) => {
//     dough(cheese, (dough) => {
//         bakepiza(dough, (pizza) => {
//             console.log("That's all for now! Here is your " + pizza + ". Enjoy!");
//         })
//     })
// })