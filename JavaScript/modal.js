const tiempo = 15*1000

function addPopUp() {
    const modal = document.createElement("div")
    modal.classList.add("show")
    modal.innerHTML = "<h2>VUELVE A TUS TAREAS!</h2><p>Termino tu tiempo</p>"

    document.body.appendChild(modal)
    document.body.style.overflow = "hidden"
}

setTimeout(addPopUp,tiempo)