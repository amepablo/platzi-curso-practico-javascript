function calcularPreciConDescuento(precio,descuento){
    
    const porcentajePrecioConDescuento = 100 - (descuento);
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {

    const array = [0, 10, 15, 20];

    const price = document.getElementById("inputPrice");
    const priceval = price.value;
    
    const discount = document.getElementById("inputDiscount")
    const discountval = discount.value;

    const cupones = document.getElementById("cupones");
    const cupon = cupones.value;

    if(cupon == array[0]){
        cuponDescuento = 0;
    }else if (cupon == array[1]){
        cuponDescuento = 10;
    }else if (cupon == array[2]){
        cuponDescuento = 15;
    }else if (cupon == array[3]){
        cuponDescuento = 20;
    }

    DescuentoFinal = parseInt(discountval) + parseInt(cuponDescuento);


    const precioConDescuento = calcularPreciConDescuento(priceval,DescuentoFinal);

    const resultPrice = document.getElementById("resultP");
    resultPrice.innerText = "el precio con descuento es: $" + precioConDescuento;
}
