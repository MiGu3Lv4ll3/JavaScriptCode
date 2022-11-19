// En este desafío tienes un array de números positivos y negativos, tu reto es 
// retornar un objeto con el número de veces que aparece un número.

function solution(array){
    let counters = {}
    array.forEach(num => {
    //  obj.key         obj.value           
        counters[num] = (counters[num] || 0) + 1
    //la primera vez que se intenta sumar 1 al obj.value este es undefined por lo que undefined + 1 = error
    //por eso se agregar || 0, para que se pueda hacer la suma    
    })

    return counters
}

let array = [1,2,5,4,1,2,5,8,9,6,5,8,9,6,3,6,3,2,5,6,2]

console.log(solution(array));