const url = "http://localhost:3000/api";

async function obtenerProductos(){
    try {
        let respuesta = await fetch('`${url}/productos`');
        let datos = await respuesta.json();
        console.log(datos);
        console.log(datos.payload);

        mostrarProductos(datos);
        
    } catch (error) {
        console.error("Error en obtenerProductos:", error);
    }
}

function mostrarProductos(){
    let listaProductos = array.payload;
    let productosListas = document.getElementById();
    let htmlListaProductos="";

    listaProductos.forEach(producto => {
        htmlListaProductos+=`<li class="li-listados productos-listados">
                                <img src="${producto.image}" alt="${producto.name}" class="img-listados">
                                <p>Id: ${producto.id} / Nombre: ${producto.name} / <strong>Precio: ${producto.price}$</strong></p>
                             </li>`;
    });

    productosListas.innerHTML = htmlProducto;
}

obtenerProductos();

/*
function init() {
let teclasGuardadas = document.getElementById("buscador");
    mostrarFrutas(arrayFrutas);
    imprimirDatosAlumno();
    filtroFrutas(arrayFrutas, teclasGuardadas);
     

}

init();
*/