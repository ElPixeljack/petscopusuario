
const carrito = document.getElementById('carrito');
const elementos1 = document.querySelectorAll('.agregar-carrito');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');


elementos1.forEach(elemento => {
    elemento.addEventListener('click', comprarElemento)
});
cargarEventListeners();

function cargarEventListeners() {
   
    carrito.addEventListener('click', eliminarElemento);

    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}


function comprarElemento(e) {
    e.preventDefault();
    const elemento = e.target.parentElement.parentElement;
    const infoElemento = leerDatosElemento(elemento);
    insertarCarrito(infoElemento);
}


function leerDatosElemento(elemento) {
    return {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.Precio').textContent,
        id: elemento.querySelector('button').getAttribute('data-id')
    };
}


function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
        <img src="${elemento.imagen}" width="100">
    </td>
    <td>${elemento.titulo}</td>
    <td>${elemento.precio}</td>
    <td>
        <a href="#" class="borrar" data-id="${elemento.id}">X</a>
    </td>
    `;
    lista.appendChild(row);
}


function eliminarElemento(e) {
    if (e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
    }
}


function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}