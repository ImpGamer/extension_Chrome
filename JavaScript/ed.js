function hideElement(event) {
    const element = event.target
    element.style.display ="none"
    document.body.style.overflow = "auto"
}

function addBorder(event) {
    const element = event.target
    element.style.border = "2px solid tomato"
}

function removeBorder(event) {
    const element = event.target
    element.style.border = ""
}

document.body.addEventListener("mouseover",addBorder)
document.body.addEventListener("mouseout",removeBorder)
document.body.addEventListener("click",hideElement)