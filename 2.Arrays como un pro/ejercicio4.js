// En este desafío tienes un array de números el cual va a tener tanto números negativos como positivos y 
// el reto es usando la función sort de JavaScript ordenarlos de mayor a menor.

function solution(array) {
    // Tu código aquí 👈 
    return array.sort((a,b)=>a-b)
}; 

solution([3, 1, 11, 5, 2, 7, 8]);