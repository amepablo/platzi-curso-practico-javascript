// const preciOriginal = 120;
// const descuento = 18;

function calcularPreciConDescuento(precio,descuento){
    
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

// Imprimir varias variables en un console.log usando un objeto
// console.log({
//     preciOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });