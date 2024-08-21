//  Carrito de compras

//  Función  agregar producto 
function agregarProducto(carrito) {
    let nombre = prompt("Ingresa el nombre del producto:");
    let precio = parseFloat(prompt("Ingresa el precio del producto:"));
    carrito.push({ nombre: nombre, precio: precio });
}

// // Función para calcular el total del carrito
function calcularTotal(carrito) {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
    } return total;
}

// Función para mostrar el contenido del carrito y el total
function mostrarCarrito(carrito, total) {
    let mensaje = "Carrito de compras:\n";
    for (let i = 0; i < carrito.length; i++) {
        mensaje = (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
    }
    mensaje = "Total: $" + total;
    return mensaje;
}

// // Función para comprobar si el total sobrepasa el presupuesto
function verificarPresupuesto(total, presupuesto) {
    if (total > presupuesto) {
        return "El total sobrepasa el presupuesto";
    } else {
        return "El total está dentro del presupuesto.";
    }
}

// Constante para el presupuesto
const PRESUPUESTO = 600;

// Carrito  vacío
let carrito = [];


let cantidadProductos = parseInt(prompt("¿Cuántos productos deseas agregar al carrito?"));
for (let i = 0; i < cantidadProductos; i++) {
    agregarProducto(carrito);
}

let total = calcularTotal(carrito);
let mensajeCarrito = mostrarCarrito(carrito, total);
let mensajePresupuesto = verificarPresupuesto(total, PRESUPUESTO);

 // Mostrar resultados
console.log(mensajeCarrito);
console.log(mensajePresupuesto);

alert(mensajeCarrito);
alert(mensajePresupuesto);





