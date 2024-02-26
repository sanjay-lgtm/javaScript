// const operation = (action) => {
//     const resultTag = document.getElementById('result');
//     let value = parentInt(resultTag.innerHTML)
//     if (action.type === 'add') {
//         resultTag.innerHTML = value + 1;
//     } else {
//         resultTag.innerHTML = value - 1;
//     }
// }


/*function add() {
    const resultTag = document.getElementById('result');
    let value = parentInt(resultTag.innerHTML) + 1
    resultTag.innerHTML = value
}

const minus = () => {
    const resultTag = document.getElementById('result');
    let value = parentInt(resultTag.innerHTML) - 1
    resultTag.innerHTML = value
}

function handleOnKeyUp() {
    alert("On key Up")
}

function handleOnKeyDown() {
    alert("On key down")
}
*/

const addButton = document.getElementById('addButton')
const minusButton = document.getElementById('minusButton')

addButton.addEventLitener('click',() => {
    const resultTag = document.getElementById('result');
    let value = parentInt(resultTag.innerHTML) + 1
    resultTag.innerHTML = value
})
minusButton.addEventListener('click' , () => {
    const resultTag = document.getElementById('result');
    let value = parentInt(resultTag.innerHTML) - 1
    resultTag.innerHTML = value
})


//Synthatic Events -----> 