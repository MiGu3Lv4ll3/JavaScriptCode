// En este desafío tienes un array que contiene otros arrays internos, debes retornar un array que 
// tenga los elementos de los otros arrays eliminando los arrays internos y dejando solo los valores, 
// normalmente a esto le llamamos aplanar el array o "Flattening Algorithm".

function solution(array) {
    // Tu código aquí 👈
    return array.flat() 
}; 


solution([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);