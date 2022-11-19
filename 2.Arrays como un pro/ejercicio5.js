// Tienes un array con palabras y tienes que retornar un array ordenado de 
// la palabra con menos caracteres a la palabra con más caracteres.

function solution(array){
    return array.sort((a, b) => a.length - b.length);
}

solution([
    "Hola",
    "Viajar",
    "Sol",
    "Aprender"
  ]);