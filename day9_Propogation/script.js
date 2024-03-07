//Propogation ---> how a certain thing is trevelling
//event propogation -----> how a event travelling
//two  types of events propgation: 
// 1. Capture phase -------> Event travels from the element to the document object model (DOM) tree's root node.
// 2. Bubbling Phase -------> Event travels from the targeted element all the way up to the DOM tree's root node

// let div1 = document.getElementById("div1");
// let div2 = document.getElementById("div2");
// let div3 = document.getElementById("div3");


// useCapture---->
// div1.addEventListener('click', function () {
//     console.log("div1 is clicked")
// },true)

// div2.addEventListener('click', function () {
//     console.log("div2 is clicked")
// },true)

// div3.addEventListener('click', function () {
//     console.log("div3 is clicked")
// },true)

// useBubbling----->
// div1.addEventListener('click', function () {
//     console.log("div1 is clicked")
// })

// div2.addEventListener('click', function () {
//     console.log("div2 is clicked")
// })

// div3.addEventListener('click', function () {
//     console.log("div3 is clicked")
// })


// stop Propogation ------>

// div1.addEventListener('click', function (e) {
//else.stopPropagation();
//     console.log("div1 is clicked")
// })

// div2.addEventListener('click', function (e) {
//else.stopPropagation();
//     console.log("div2 is clicked")
// })

// div3.addEventListener('click', function (e) {
//else.stopPropagation();
//     console.log("div3 is clicked")
// })

//event object ----> 

// let buttons = document.querySelector('button');

// buttons.forEach(button => {
//     button.addEventListener('click', function(event){
//         console.log(event)
//     }

// })


//event deligation ----->
// let div = document.querySelector('div');

// div.addEventListener('click', function (event) {
//     // let btn = event.target;

//     if (event.target.tagName === 'BUTTON') {

//         if (event.target.innerText === 'Button 5') {
//             console.log(event)
//             console.log(event.target.innerText)
//         }

//     }

// })