// En este desafío recibirás dos arrays de números como parámetros 
// de entrada y debes retornar un array que tenga los dos arrays unidos.

function solution(arrayA, arrayB) {
    // Tu código aquí 👈
   let newArray = [...arrayA, ...arrayB]
   return newArray
}; 

solution([1, 2, 3], [4, 5, 6]);
solution(["A", "B", "C"], ["D", "E", "H"]);