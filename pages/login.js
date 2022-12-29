
const datosUsuario = {
    usuario : "seba",
    contraseña: "seba"
}

const inputUsuario = document.querySelector("#input-user")
const inputPassword = document.querySelector("#password")
const botonInicio = document.querySelector("#boton")
const loginFail = document.querySelector("#logout")
const formLogin = document.querySelector("#inicio-form")
const contenedorForm = document.querySelector("#sesion")
const cerrarSesion = document.querySelector("#cerrar-sesion")

const subirAlmacenamientoLocal = (clave, valor) =>{
    localStorage.setItem( clave, JSON.stringify(valor))
}

const obtenerAlmacenamientoLocal = ( clave ) =>{
    return JSON.parse(localStorage.getItem(clave))
}

formLogin.onsubmit = ( event ) => {
    event.preventDefault()
    if( inputUsuario.value === datosUsuario.usuario && inputPassword.value === datosUsuario.contraseña ){
        subirAlmacenamientoLocal ("login",true)
        cerrarSesion.style.display = "flex"
    } else {
        loginFail.style.display = "block"
        loginFail.style.color = "black"
    }
}

function validarLogin (clave) {
    if ( clave !== true) {
        contenedorForm.style.display = "flex"
    } else {
        cerrarSesion.style.display = "none"
    }
}

validarLogin(obtenerAlmacenamientoLocal("login"))


cerrarSesion.onclick = () =>{
    localStorage.removeItem ("login")
    validarLogin(obtenerAlmacenamientoLocal("login"))
    cerrarSesion.style.display = "none"
    formLogin.reset()
}