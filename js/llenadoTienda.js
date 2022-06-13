// creando un arreglo de objetos


export function llenartienda() {

    let productos = [{
            foto: "assets/images/almoadamiss.webp",
            nombre: "Almohada de Miss Fortune",
            precio: 35000,
            descripcion: "Almohada Decorativa de 50,8 x 66 cm, diseño de Miss Fortune",
        },
        {
            foto: "assets/images/almoadajinx.webp",
            nombre: "Almohada Jinx",
            precio: 35000,
            descripcion: "Almohada Decorativa de 50,8 x 66 cm, diseño de Jinx",
        },
        {
            foto: "assets/images/6piezasdeacrilico.jpg",
            nombre: "Personajes en acrilico",
            precio: 28000,
            descripcion: "6 piezas de acrilico de tus personajes preferidos",
        },
        {
            foto: "assets/images/audifonos-inalam-kda-lg-g733.webp",
            nombre: "Logitec G733",
            precio: 350000,
            descripcion: "Audifonos inalambricos de la marga Logitec G733, con tematica KDA",
        },
        {
            foto: "assets/images/lg-pro-lol.webp",
            nombre: "Mouse Logitech G305",
            precio: 250000,
            descripcion: "Mouse Logitech G305 Wireless Edicion League Of Legends",
        },
        {
            foto: "assets/images/funcoth3.jpg",
            nombre: "Funko Pop Thresh",
            precio: 55000,
            descripcion: "Expectacular funko pop de 10cm de altura del campeon Thresh de League of Legends",
        },
        {
            foto: "assets/images/funkoashe.jpg",
            nombre: "Funko Pop Ashe",
            precio: 55000,
            descripcion: "Expectacular funko pop de 10cm de altura del campeon Ashe de League of Legends",
        },
        {
            foto: "assets/images/funkobraum.jpg",
            nombre: "Funko Pop Braum",
            precio: 55000,
            descripcion: "Expectacular funko pop de 10cm de altura del campeon Braum de League of Legends",
        },
        {
            foto: "assets/images/funkojinx.jpg",
            nombre: "Funko Pop Ashe",
            precio: 55000,
            descripcion: "Expectacular funko pop de 10cm de altura del campeon jinx de League of Legends",
        },
        {
            foto: "assets/images/funkoleesin.jpg",
            nombre: "Funko Pop Lee sin",
            precio: 55000,
            descripcion: "Expectacular funko pop de 10cm de altura del campeon Lee sin de League of Legends",
        },
        {
            foto: "assets/images/lg-g305-kda-mouse.webp",
            nombre: "Mouse logitec",
            precio: 425000,
            descripcion: "Mouse Logitech G305 Wireless Edicion KDA",
        },
        {
            foto: "assets/images/lg-g502-kda.webp",
            nombre: "Mouse G502 edicion KDA",
            precio: 555300,
            descripcion: "Expectacular Mouse G502 edicion KDA",
        },
        {
            foto: "assets/images/logitex-pro-x.webp",
            nombre: "Audifonos logitec pro x",
            precio: 655000,
            descripcion: "Expectacular Audifonos logitec pro x",
        },
        {
            foto: "assets/images/mousepad-kda.webp",
            nombre: "Mouse pad league of legends",
            precio: 55000,
            descripcion: "Expectacular Mouse pad league of legends, con el diseño de KDA",
        },
    ];
    //como recorrer un arreglo con js
    //1.creo una variable para almacenar la base sobre la cual voy a pintar


    // CREO UNA VARIABLE PARA ALMACENAR LA BASE SOBRE LA QUE PINTAR
    let fila = document.getElementById("fila")

    //COMO RECORRERO UN ARREGLO CON JS
    //1. TENER ARREGLO
    productos.forEach(function(producto) {
        //console.log(producto.nombre)
        //console.log(producto.precio)
        //console.log(producto.foto)

        //2.pintando etiquetas


        //div con la clase col
        let columna = document.createElement("div")
        columna.classList.add("col")
        columna.classList.add("my-5")

        //div con las clases card h-100
        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        //img con la clase card-img-top
        let foto = document.createElement("img")
        foto.classList.add("card-img-top", "h-100", "w-100", "d-block", "rounded")
        foto.src = producto.foto

        //h4 con la clase text-center
        let nombre = document.createElement("h5")
        nombre.classList.add("text-center")
        nombre.textContent = producto.nombre

        //un Button en el precio para iniciar compra
        let precio = document.createElement("p")
        precio.classList.add("text-center")
        precio.textContent = producto.precio

        //un Button en el precio para iniciar compra
        let boton = document.createElement("button")
        boton.classList.add("btn", "w-50", "d-block", "mx-auto", "mt-4", "mb-3", "btn-outline-dark")
        boton.setAttribute("type", "button")
        boton.textContent = "ampliar info"

        //damos la descripcion pa antojar
        let descripcion = document.createElement("h6")
        descripcion.classList.add("card-body", "card-subtitle", "text-center", "mb-2", "text-muted")
        descripcion.textContent = producto.descripcion

        //3. padres e hijos
        tarjeta.appendChild(foto)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(descripcion)
        tarjeta.appendChild(boton)

        columna.appendChild(tarjeta)
        fila.appendChild(columna)


    })
}