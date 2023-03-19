// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, 
// cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

// Ejemplo:
// Input:
// [‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, 
// ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]

let ciudades = [];
let ciudad = '';

do{
    ciudad = prompt('Ingrese el nombre de una ciudad: ');
    ciudades.push(ciudad);
}while(confirm('¿Desea agregar otra ciudad?'));

// Mostrar la longitud del arreglo.
document.write(`<strong>El arreglo tiene ${ciudades.length} elementos</strong> <br>`);

// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
document.write(`<h2>ITEMS</h2>`)
document.write(`Elemento 1ra posición: ${ciudades[0]}<br>`)
document.write(`Elemento 3ra posición: ${ciudades[2]}<br>`)
document.write(`Elemento Ultima posición: ${ciudades[ciudades.length-1]}<br>`)


// Añade en última posición la ciudad de París.
ciudades.push('Paris');
document.write('<h2>Lista de arreglo con la ciudad PARIS al final</h2>');
for(let indice=0;indice<ciudades.length;indice++){
    document.write(`Elemento: ${ciudades[indice]}<br>`);
}

// Escribe por pantalla el elemento que ocupa la segunda posición.
document.write(`<br>Elemento de la Segunda posición: ${ciudades[1]}<br>`)

// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
ciudades[1] = 'Barcelona';
document.write('<h2>Lista de arreglo con ciudad BARCELONA en segunda posicion</h2>');
for(let indice=0;indice<ciudades.length;indice++){
    document.write(`Elemento ${indice} - ${ciudades[indice]}<br>`);
}



