let btn = document.getElementById('buttons_container');
// console.log(btn);
let text = document.getElementsByTagName("textarea")[0];
let notes = document.getElementById("notes_conatiner");
let hide = document.getElementById("hided");
let color = document.getElementById("color")

btn.addEventListener('click', addNotes);
function addNotes() {
    if (text.value == "") {
        alert("Enter some text");
        return;
    }
    // console.log("Note added");
    hide.innerText = "";

    let div = document.createElement("div")
    let p = document.createElement("p")
    let cross_button = document.createElement("button");
    cross_button.innerText = "X";
    cross_button.classList.add("del");
    p.innerHTML = text.value;
    div.appendChild(p);
    div.classList.add("noteStyle");
    div.style.backgroundColor = color.value;
    notes.appendChild(div);
    text.value = "";
    cross_button.addEventListener("click", (e) => {
        div.style.display = "none"
    })


}
function colorChange() {
    text.style.backgroundColor = color.value;
}
btn.addEventListener('click',addNotes);
color.addEventListener("change",colorChange);
