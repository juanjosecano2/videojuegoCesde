import { llenartienda } from './llenadoTienda.js'
import { ampliarinformacionproducto } from './ampliarinfo.js'
//creo un producto vacio
let producto = {}
    // llamando a tienda llenado
llenartienda()
    //llamar modal
let modalinfo = new bootstrap.Modal(document.getElementById('modalinfo'))
let modalcompra = new bootstrap.Modal(document.getElementById('resumencompra'))

    //rutina para ampliar info
let filaContenedor = document.getElementById("fila")
filaContenedor.addEventListener("click", function(evento) {
    if (evento.target.classList.contains("btn")) {

        producto = ampliarinformacionproducto(evento)
        modalinfo.show()

    }
})

// rutina para add un producto al carrito de compras
let carrito = []

let botonAgregarCarrito = document.getElementById("botonadd")
botonAgregarCarrito.addEventListener("click", function(evento) {

    //capturar cantidad y agg al producto
    let cantidad = document.getElementById("cantidadproducto").value
    producto.cantidad = cantidad
        //agrego el producto al carrito
    carrito.push(producto)
        //pintar la capsula del carrito
    let suma = 0
    carrito.forEach(function(producto) {
        suma = suma + Number(producto.cantidad)


    })
    let cantidad1 = document.getElementById("cantidad")
    cantidad1.reset()
    let capsula = document.getElementById("capsula")
    capsula.textContent = suma
    capsula.classList.remove("invisible")
    console.log(carrito)
    modalinfo.hide()


})
let btnLimpiarCarrito = document.getElementById("botonclean")
btnLimpiarCarrito.addEventListener("click", function() {

    carrito = []
        //console.log(carrito)
    let total = document.getElementById("totalpesos")
    total.textContent = ""
    let capsula = document.getElementById("capsula")
    capsula.classList.add("invisible")
        //console.log("se vacio el carrito")
    modalinfo.hide()

})

// rutina para ver el carrito
let vercarrito = document.getElementById("vercarrito")
vercarrito.addEventListener("click", function() {

    //recorrer el carrito y pintar los productos
    let base = document.getElementById("basecarro")
    let totalPesos = document.getElementById("totalpesos")
    let totales = []
    base.innerHTML = ""

    carrito.forEach(function(producto) {
        let fila = document.createElement("div");
        fila.classList.add("row", "my-3");
        let columna1 = document.createElement("div");
        columna1.classList.add("col-4");
        let columna2 = document.createElement("div");
        columna2.classList.add("col-8");

        let foto = document.createElement("img");
        foto.classList.add("w-100", "img-fluid");
        foto.src = producto.foto;

        let titulo = document.createElement("h5");
        titulo.classList.add("text-center");
        titulo.textContent = producto.nombre;

        let descricioresumen = document.createElement("h6");
        descricioresumen.classList.add("text-center", "mb-2", "text-muted");
        descricioresumen.textContent = producto.descripcion;

        let cantidadresumen = document.createElement("h5");
        cantidadresumen.classList.add("text-center");
        cantidadresumen.textContent = "Cantidad: " + producto.cantidad;

        let preciouni = document.createElement("p");
        preciouni.classList.add("text-center");
        preciouni.textContent = "Precio u/n :" + producto.precio;

        let subtotal = document.createElement("h6");
        subtotal.classList.add("text-center");
        let resultado = Number(producto.precio) * Number(producto.cantidad);
        subtotal.textContent = resultado;

        
        producto.subtotal = resultado
        console.log("hola")
        totales.push(producto)
        console.log(totales)

        let TotalnetoPesos = 0;
        totales.forEach(item => {
            TotalnetoPesos = TotalnetoPesos + Number(item.subtotal);

        });

        totalPesos.textContent = "Total $: " + TotalnetoPesos + " Cop"

        let filatotal = document.createElement("div");
        filatotal.classList.add("row", "my-3");

        



        //padres e hijos

        columna2.appendChild(titulo);
        columna2.appendChild(descricioresumen);
        columna2.appendChild(cantidadresumen);
        columna2.appendChild(preciouni);
        columna2.appendChild(subtotal);

        columna1.appendChild(foto);

        fila.appendChild(columna1);
        fila.appendChild(columna2);
        base.appendChild(fila);
    })

    modalcompra.show()
})