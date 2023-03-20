// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y 
// devuelve como resultado una cadena de texto que indica si el número es par o impar. 
// Mostrar por pantalla el resultado devuelto por la función.

const numero = parseInt(prompt('Ingrese un numero: '));
function esParImpar(numero){
    return numero%2==0;
}
let resultado = esParImpar(numero) ? 'El número es Par' : 'El número es Impar';
document.write(resultado);
