// Tienes un array de ordenes de compra con los siguientes atributos:

// customerName: string
// total: number
// delivered: boolean
// Debes filtrar todas las órdenes de compra que cumplan con la condición de tener un total mayor o igual a 100 
//y además que el estado delivered sea "true".

function solution(array) {
    return array.filter(shopp => 
      shopp.total>=100 && shopp.delivered == true
      )
}; 

let shopping = [
    {
      customerName: "Nicolas",
      total: 100,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
  ]

console.log(solution(shopping))