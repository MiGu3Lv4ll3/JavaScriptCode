//En este desafío tienes un array de números positivos y negativos, tu reto es retornar un array ordenado 
//de menor a mayor y dejando los valores sin que se repitan números.

function solution(array){
    return array
        .filter((item, i, array) => array.indexOf(item) === i)
        .sort((a,b) => a - b);
        //indexOf devuelve el indice del primer elemento que coincide con el parametro que se le manda
        //si existen repetidos el idice de un repetido siempre sera el indice del primero que encuentre en el arreglo
};

function mySolution(array){
    let unique = []
    for ( i in array ) {
        if ( array.indexOf(array[i]) == i ) {
            unique.push(array[i])
        }
    }
    return unique.sort((a, b) => a - b)
}

const array = [1, 2, -3, -1, 2, 4, 4, 1, 45, -1]

console.log(mySolution(array))