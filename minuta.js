const boton = document.getElementById("tombola-minuta")
const resultado = document.getElementById("ganador")
let date = document.getElementById("date")
const limpiar = document.getElementById("limpiar")


n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();

date.innerHTML = d + "/" + m + "/" + y;
let nombresEquipo = ['Liv', 'Vicky', 'Flor', 'Barbi', 'Elías', 'Leandro', 'José', 'Ayi', 'Daniel']

const obtenerPosicion = () => {
    let largo = nombresEquipo.length;
    return Math.floor(Math.random() * largo);
}

const obtenerNombre = () => {
    return nombresEquipo[obtenerPosicion(nombresEquipo)]
}

boton.onclick = () => {

   resultado.classList.add("nombre-ganador") 
   resultado.textContent = obtenerNombre()
}

limpiar.onclick = () => {
    resultado.textContent = "Afortunado que hace la minuta"
    resultado.classList.remove("nombre-ganador")
 }