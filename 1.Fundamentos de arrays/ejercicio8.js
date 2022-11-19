// Tienes un array de números y debes retornar la suma de todos los valores en él.

function solution2(numbers){
    return numbers.reduce((count, item) => count + item, 0);
}; 

function mySolution(numbers) {
	let total = 0
	numbers.forEach(number => {
        total += number
    }) 
	return total
} 

let numbers = [1,3,5,8]

console.log(solution2(numbers))