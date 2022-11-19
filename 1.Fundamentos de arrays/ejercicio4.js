// Tienes un array con palabras, tu desafío es retornar un array solo con las 
// que cumplan con la condición de tener 4 o más letras.


function solution(array) {
    return array.filter(word => word.length >= 4)
};

let words = ['amor', 'sol', 'piedra', 'día']

console.log(solution(words))