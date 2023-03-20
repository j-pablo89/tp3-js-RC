// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
// luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)
// Ejemplo:

// Input:
// lado A = 24
// lado B = 5
// Output: 58

const lado1 = parseInt(prompt('Ingrese el valor del lado 1 del rectágulo: '));
const lado2 = parseInt(prompt('Ingrese el valor del lado 2 del rectángulo: '));
function rectangulo(lado1,lado2){
    return (2*(lado1+lado2));
}
document.write(`El Perímetro del rectángulo es: ${rectangulo(lado1,lado2)}`);
