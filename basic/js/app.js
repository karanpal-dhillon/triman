function notify() {
    alert("your wrok has been saved")
}
saveButton.addEventListener("click", notify)

// function onHover() {
//     h2Id.classList.add("underline")
// }
h2Id.addEventListener("mouseover", toggleClassOnElement)
h2Id.addEventListener("mouseout", toggleClassOnElement)
para1.addEventListener("mouseover", toggleClassOnElement)
para1.addEventListener("mouseout", toggleClassOnElement)

// h2Id.addEventListener('mouseover', () => toggleClassOnElement(h2Id))
// function onMouseOut() {
//     h2Id.classList.remove("underline")
// }

function toggleClass() {
    h2Id.classList.toggle("underline")
}

function toggleClass1() {
    para1.classList.toggle("background")
}

function toggleClassOnElement(event) {
    const element = event.target;
    element.classList.toggle('underline')
}



