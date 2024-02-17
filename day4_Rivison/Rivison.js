//Basic Javascript

//1)Conditionals
//2)If-else

// let a=10
// if(a===10){
//     console.log(a);
// }

// if(a==10){
//     console.log(a);
// }

// let c=0
// let b=true

// if(!c===b){
//     if(c==b) console.log(b);
//     else console.log(c)
// }else{
//     console.log(c+20)
// }

//non-zero----> true
//zero ------->false
// not operater always prefrence first


// a=true
// b=false
// c=10


// if(a&& b|| c && !a){
//     console.log("hi")
// }else{
//     console.log("hello")
// }

// a=true
// b=false
// c=10


// if(a&& b|| c || !a){
//     console.log("hi")
// }else{
//     console.log("hello")
// }

// a&&b || c|| !a
// true && false || true || !true
// =true &&  false || true || false
// =false || 


// a=true
// b=false
// c=10


// if(a&& b|| c && !a){
//     console.log("hi")
// }else{
//     console.log("hello")
// }


// for(let i=0;i++<10;i--){
//     console.log(i);
//     i+=2;
// }

// for(let i=0;++i<10;i--){
//     console.log(i);
//     // i+=i--;
// }


//    let arr = [1,2,3,4,5,6,8];
//    let sum =0;
// //    for(let i=0;i<arr.length;i++){
// //     sum+=arr[i];

// //    }

// //    console.log(sum);

// arr.forEach((el) => sum += el);
// console.log(sum)



// const sum =(array)=>{
//     let flag=0;
//     for(let i=0;i<array.length;i++){
//         flag+=array[i]
//     }
//     return flag
// }
// const value=sum([1,2,3,4,5])
// console.log(value)

// for(let i=0;i<10;i++){
//     let=''
//     for(let j=0;j<i;j++){
//         process.stdout.write("*");
//     }
//     // console.log('\n');
//     // process.stdout.read('\n');
// }


// setTimeout(()=>{
//     date=new Date().date
//     console.log('hello setTimeOut',date)
// },2000)
// console.log('Global')


// var date = new Date();
// var value=0

// const add = setTimeout(()=>{
//     value++;
// },1000)

// const subtract = setTimeout(()=>{
//     value-=2;
// },1000)

// setTimeout(()=>{
//     console.log(value)
// },5000)
// console.log('Global')

// setTimeout(()=>{
//     value++;
// },1000)

// setTimeout(()=>{
//     value-=2;
// },1000)

// setTimeout(()=>{
//     console.log(value);
// },1000)

setTimeout(()=>{
    const array=[1,2,3,4,5]
    setTimeout(()=>{
        delete array
    },2000)
    for(let i=0;i<array.length;i++){
        setTimeout(()=>{
            console.log(array[i])
        },300)
    }
},1000)