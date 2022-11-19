//En este desafío vas a recibir un array de string y debes retornar un string 
//en donde cada elemento del array esté separado por comas.

function solution(words){
    return words.join(',')
}


let array1 = ["amor", "sol", "piedra", "día"]
let array2 = ["diamonds", "hearts", "spades"]

console.log(solution(array1));