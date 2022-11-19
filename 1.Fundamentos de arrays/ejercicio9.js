// Tienes un array de órdenes de compra con los siguientes atributos:

// customerName: string
// total: number
// delivered: boolean

// Debes retornar la suma total de todas las órdenes de compra.

function solution2(orders){
    return orders
        .map((item) => item.total)
        .reduce((count, item) => count + item, 0);
};

function mySolution(orders){
    let total = 0
    orders.forEach(order=>{
        total += order.total
    })
    return total
}

let orders = [
    {
      customerName: "Nicolas",
      total: 100,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    }
  ]

console.log( mySolution(orders) )
