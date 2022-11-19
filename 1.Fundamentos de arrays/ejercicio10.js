// En este desafío tienes un array de números y debes retornar true 
// si dentro de los números de ese array al menos uno es un número par.

function solution2(numbers) {
    return numbers.some(item => item%2===0)
}; 

function mySolution(numbers) {
   let thereIs = false
   numbers.forEach(number => {
       if(number%2 === 0){
           thereIs = true
       }
   });
   return thereIs
}; 

let numbers = [1, 3, 5, 7, 10, 11]
let numbers2 = [1, 3, 5]

console.log(mySolution(numbers))
console.log(mySolution(numbers2))