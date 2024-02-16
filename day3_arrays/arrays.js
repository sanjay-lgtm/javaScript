// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr);
// function sum() {

// }

// let arr = [1, 2, true, "sanjay", null, undefined, sum, {}, [1, 2, 3, 4]];
// console.log(arr);

let productArray = [
    { name: 'pro1', price: 100 },
    { name: 'pro2', price: 200 },
    { name: 'pro3', price: 300 },
    { name: 'pro4', price: 400 },
    { name: 'pro5', price: 500 },
    { name: 'pro6', price: 600 }

]

// splice takes 3 argument:--
// starting indexe
// deletion count
// element you want to insert

// let new1 = productArray.splice(2, 2, 3, 4);
// console.log(new1);

// Slice takes 2 arguments: -
//     starting index,
//         ending index(optional)




// let newArr = productArray.slice(3);
// console.log(newArr);
// console.log(productArray);

// console.log(productArray.reverse());

// console.log(productArray.sort());
// all elements sorted in lexographical order
// to overcome this method

// productArray.sort(function(obj1,obj2){
//     return obj2.price - obj1.price;
// })
// console.log(productArray);

// some is  used  for 

// let ans = productArray.some(function(obj){
//     if(obj.price > 100){
//         return true;
//     }else{
//         return false;
//     }
// })
// console.log(ans);

// let ans = productArray.every(function(obj){
//     if(obj.price > 100){
//         return true;
//     }else{
//         return false;
//     }
// })
// console.log(ans);

// delete productArray[4];
// console.log(productArray);

// delete gives a empty space