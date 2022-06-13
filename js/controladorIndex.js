//VERIFICAR SI EL USUARIO ESTA REGISTRADO O HIZO LOGIN
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"



//referencia al nombre de usuario o avatar
//referencia al boton de salir

let avatar = document.getElementById("avatar")
let botonSalir = document.getElementById("botonsalir")
let botonlogin = document.getElementById("btnlogin")
let botontienda = document.getElementById("btnTienda")
let botonmusica = document.getElementById("btnMusica")
let botonregistro = document.getElementById("navmodalregistrar")
let avatarcirculo = document.getElementById("avatarcirculo")



const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        avatar.classList.remove("invisible")
        avatar.textContent = user.email
        botonlogin.classList.add("invisible")
        botontienda.classList.remove("invisible")
        botonmusica.classList.remove("invisible")
        botonregistro.classList.add("invisible")
        avatarcirculo.classList.remove("invisible")


        //RUTINA DE SALIR
        botonSalir.addEventListener("click", function(evento) {

            signOut(auth).then(() => {
                // Sign-out successful.
                avatar.classList.add("invisible")
                botonlogin.classList.remove("invisible")
                window.location.href = "index.html"

            }).catch((error) => {
                // An error happened.
            });

        })


        // ...
    } else {
        avatar.classList.add("invisible")
            // User is signed out
            // ...
    }
});