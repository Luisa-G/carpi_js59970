let nombre = prompt("Ingresa tu nombre:");
let ciudad
do {
    ciudad = prompt("Elige una de estas tres ciudades e ingresa su nombre:\n - Guadalajara\n - Chihuahua\n - Campeche").toLowerCase();
} while (ciudad != "guadalajara" && ciudad != "chihuahua" && ciudad != "campeche");
let consumo = parseInt(prompt("Ingresa tu consumo mensual en kWh:"));

function tipoConsumo(consumo) {
    if (consumo > 1000) {
        return "alto";
    } else if (consumo > 500) {
        return "medio";
    } else {
        return "bajo";
    }
}


function calculoAhorro(consumo, ciudad) {
    switch (ciudad) {
        case "guadalajara":
            return 2.5 * consumo;
        case "chihuahua":
            return 3.2 * consumo;
        case "campeche":
            return 1.8 * consumo;  
        default:
            return "Esa ciudad no se tiene"      
    }
}

console.log("¡Hola " + nombre + "!\n\nTu consumo de " + consumo + " kWh al mes se considera " + tipoConsumo(consumo) +".\n\nCon nuestros paneles fotovoltaicos tendrás un ahorro de $" + calculoAhorro(consumo, ciudad) + " MXN al mes.");
