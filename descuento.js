
var descuentoFinal = descuentoPrecio(15,5000);
console.log({descuentoFinal});
function descuentoPrecio(descuento, precio){
    return (precio*(100 - descuento))/100;
}

function descuentoProducto(){
    const inputPrice = document.getElementById("InputPrice");
    var precioValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    var discountValue = inputDiscount.value;
    const precioF = descuentoPrecio(discountValue, precioValue,);
    
    const priceP = document.getElementById("priceP");
    priceP.innerText = "precio de "+precioF;
}