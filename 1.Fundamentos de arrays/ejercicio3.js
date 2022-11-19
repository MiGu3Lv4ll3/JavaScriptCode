// Tienes un array de productos con los siguientes atributos:

// name
// price
// stock
// Debes agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base.

// Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de $1000 
// el resultado de los "taxes" será $190, debes tener en cuenta que como resultado 
// se debe dejar un valor entero sin decimales.

function solution(array) {
	return array.map(prod => ({
		...prod,
        taxes: Math.trunc(prod.price * .19)
	}))
}; 

let products = [
	{
		name: "Product 1",
		price: 1000,
		stock: 10
	},
	{
		name: "Product 2",
		price: 2000,
		stock: 20
	}
]

console.log(solution(products))