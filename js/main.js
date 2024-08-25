/* Comentarios
que pueden tener
muchas líneas */

// Comentarios de una línea

//! Javascript es case sensitve
//? pregunta azul azul
//TODO naranja
//* verde claro


let nombre = prompt("Ingresa tu nombre:");
let ciudad
do {
    ciudad = prompt("Elige una de estas tres ciudades e ingresa su nombre:\n - Guadalajara\n - Chihuahua\n - Campeche").toLowerCase();
} while (ciudad != "guadalajara" && ciudad != "chihuahua" && ciudad != "campeche");
let consumo = parseInt(prompt("Ingresa tu consumo mensual en kWh:"));



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

if (consumo > 1000) {

}



console.log("¡Hola " + nombre + "!\n\nConsumes mensualmente " + consumo + " kWh y con nuestros paneles fotovoltaicos \nvas a tener un ahorro de $" + calculoAhorro(consumo, ciudad) + " MXN al mes.");
