// 3- Escribir un script que simule el lanzamiento de dos dados. 
// Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 
// para cada uno de los lanzamientos de los dados. 
// Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, 
// repitiendo 50 veces esta operación.

let numero1;
let numero2;
let sumaTotal;
let sumaDados = [0,0,0,0,0,0,0,0,0,0,0,0,0];

for(let indice=0;indice<50;indice++){
    numero1 = Math.floor((Math.random() * 6) + 1);
    numero2 = Math.floor((Math.random() * 6) + 1);
    console.log(numero1);
    console.log(numero2);
    sumaTotal = numero1+numero2;
    sumaDados[sumaTotal] = sumaDados[sumaTotal] + 1;
}

document.write(`<table>`);
document.write(`<tr>`);
document.write(`<th>Suma 🎲🎲</th>`);
document.write(`<th>Apariciones</th>`);
document.write(`</tr>`);
for(let fila=2;fila<sumaDados.length;fila++){
    document.write(`<tr>`);
    for(let colum=0;colum<2;colum++){
        if(colum==0){
            document.write(`<td>${fila}</td>`)
        }
        if(colum==1){
            document.write(`<td>${sumaDados[fila]}</td>`)
        }
    }
    document.write(`</tr>`)  
}
document.write(`</table>`)