const inputNombre = document.querySelector("#input-nombre")
const formContacto = document.querySelector("#form-contacto")
const inputEmail = document.querySelector("#email")
const imputMensaje = document.querySelector("#mensaje")
const inputEnviar = document.querySelector("#boton")
let informacionDelContacto = []



formContacto.onsubmit= ( event ) => {
    event.preventDefault()
    if(inputNombre.value === '' || inputEmail.value === '' || imputMensaje === ''){
        alert ("Debes completar todos los campos")
    } else{  
        
        informacionDelContacto.push({
            nombre: inputNombre.value,
            email : inputEmail.value,
            mensaje : imputMensaje.value})
        }  
        formContacto.reset()
}

const botonOscuro = document.querySelector("#oscuro-claro")
const body = document.querySelector(".color-contacto")
botonOscuro.onclick = () => {
    body.classList.toggle("modo-oscuro")
    if( body.className === "container__contacto color-contacto modo-oscuro"){
        botonOscuro.textContent= "Modo Claro"
    } else {
        botonOscuro.textContent = "Modo Oscuro"
    }
}

const contenedorCartita= document.querySelector(".contenedor")

const nombre =document.querySelector(".nombre")
const mail = document.querySelector(".mail")
const mensaje = document.querySelector(".mensaje")

inputNombre.oninput= () =>{
    if( inputNombre.value === "" || inputNombre.value.length < 4){
        nombre.textContent = "Nombre"
        inputNombre.style.border = "2px solid red"
    } else {
        nombre.textContent = inputNombre.value
        inputNombre.style.border = "2px solid green"
    }
}
inputEmail.oninput= () =>{
    if( inputEmail.value === "" || inputEmail.value.length < 4 ){
        mail.textContent = "Email"
        inputEmail.style.border = "2px solid red"
    } else {
        mail.textContent = inputEmail.value
        inputEmail.style.border = "2px solid green"
    }
}

imputMensaje.oninput= () =>{
    if( imputMensaje.value === ""){
        mensaje.textContent = ""
    } else {
        mensaje.textContent = imputMensaje.value
    }
}

inputEnviar.onclick = () =>{
    inputEnviar.style.background = "green"
}