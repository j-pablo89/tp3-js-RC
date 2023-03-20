// 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
// A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, 
// sólo por minúsculas o por una mezcla de ambas.

const cadena = prompt('Ingrese una cadena de texto: ');
let banderaMayus = false;
let banderaMinus = false;
function cadenaMayusculaMinuscula(cadena){
    for(let indice=0;indice<cadena.length;indice++){
        if(cadena.charAt(indice) === cadena.charAt(indice).toLowerCase() && cadena.charAt(indice) != ' ' ){
            banderaMinus=true;
        }
        if(cadena.charAt(indice) === cadena.charAt(indice).toUpperCase() && cadena.charAt(indice) != ' '){
            banderaMayus=true;
        }
    }
    if(banderaMayus && banderaMinus){
        return 'Contiene Mayúsculas y Minúsculas';
    }
    if(banderaMayus){
        return 'Contiene solo Mayúsculas';
    }
    if(banderaMinus){
        return 'Contiene solo Minúsculas';
    }
}
document.write(cadenaMayusculaMinuscula(cadena));