// let heading1 = document.querySelector("h1")

// //3 argument:- event type ,functioality,useCapture
// heading1.addEventListener( "click", function(){
//     alert("Hi is Clicked!")
// });

let deBtn = document.querySelector(".decrement-button")
let inBtn = document.querySelector(".increment-button")
let para = document.getElementById("quantity")
let count = 0;

deBtn.addEventListener('click', function () {
    if (count > 0) {
        count--;
        para.innerText = count;
    }
    // console.log(count);
})

inBtn.addEventListener('click', function () {
    count++;
    para.innerText = count;
    // console.log(count);
})

let categoryFilter =  document.querySelector("category-filter");
let productList = document.querySelector('product-list');

categoryFilter.addEventListener('change',function(){
    let selectValueByUser = categoryFilter.value;
    let products = productList.querySelectorAll(".product");
    products.forEach(product =>{
        let productDataCategory = product.getAttribute('data-category')
        if(selectValueByUser === productDataCategory){
            product.style.display = 'block';
        }else{
            product.style.display = "none"
        }
    })
})