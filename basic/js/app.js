function notify() {
    alert("your wrok has been saved")
}
saveButton.addEventListener("click", notify)

// function onHover() {
//     h2Id.classList.add("underline")
// }
h2Id.addEventListener("mouseover", toggleClass)

// function onMouseOut() {
//     h2Id.classList.remove("underline")
// }
h2Id.addEventListener("mouseout", toggleClass)

function toggleClass() {
    h2Id.classList.toggle("underline")
}

function toggleClass1(){
    para1.classList.toggle("background")
}
para1.addEventListener("mouseover",toggleClass1)
para1.addEventListener("mouseout", toggleClass1)