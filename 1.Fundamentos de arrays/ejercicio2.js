// En este desafío tienes un array de objetos que representan datos de personas con los siguientes atributos:

// name
// lastName
// age
// El reto aquí es retornar un array de strings con los nombres, la solución debería tener un input y output como los siguientes:

// Output

// ['Nicolas', 'Valentina']


function solution(array) {
    // Tu código aquí 👈 
    return array.map(item => item.name)
}; 


// Input

solution([
  {
    name: 'Nicolas',
    lastName: 'Molina',
    age: 28
  },
  {
    name: 'Valentina',
    lastName: 'Molina',
    age: 19
  }
]);