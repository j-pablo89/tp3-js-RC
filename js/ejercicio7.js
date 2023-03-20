// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
// la creación de la tabla debe ser realizada con una función y mostrar solo los resultados 
// del 1 al 10 del número elegido por el usuario.

const numero = parseInt(prompt('Ingrese un numero: '));

function tablaMultiplicar(numero){
    document.write(`<table>`);
    document.write(`<tr>`);
    document.write(`<th>Tabla del ${numero}</th>`);
    document.write(`<th>Resultado</th>`);
    document.write(`</tr>`);
    for(let fila=1;fila<=10;fila++){
        document.write(`<tr>`);
        for(let columna=0;columna<2;columna++){
            if(columna==0){
                document.write(`<td>${fila} x ${numero}</td>`);
            }
            if(columna==1){
                document.write(`<td>${fila*numero}</td>`);
            }
        }
        document.write(`</tr>`);
    }
    document.write(`</table>`);
}

tablaMultiplicar(numero);