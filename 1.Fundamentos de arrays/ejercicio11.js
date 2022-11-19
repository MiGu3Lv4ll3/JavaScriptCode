// En este desafío tienes un array de números y debes retornar true 
// si dentro de los números de ese array todos los números son pares.

function solution2(numbers){
    return numbers.every((item) => item % 2 === 0)
}; 

function mySolution(numbers){
    let res = true
    numbers.forEach(number => {
        if (number%2!==0) {
            res = false
        }
    });
    return res
}

let numbers = [2, 4, 6, 8, 10]
let numbers2 = [1, 3, 5, 7, 10, 11]
let numbers3 = [1, 3, 5]

console.log(solution2(numbers))
console.log(solution2(numbers2))
console.log(solution2(numbers3))
