const boton = document.getElementById("tombola-minuta")
const resultado = document.getElementById("ganador")


let nombresEquipo = ['Liv', 'Vicky', 'Flor', 'Barbi', 'Elías', 'Leandro', 'José', 'Ayi', 'Daniel']

const obtenerPosicion = () => {
    let largo = nombresEquipo.length;
    return Math.floor(Math.random() * largo);
}


const obtenerNombre = () => {
    return nombresEquipo[obtenerPosicion(nombresEquipo)]
}

boton.onclick = () => {
   resultado.textContent = obtenerNombre()
}