console.log("///////////PRIMER METODO////////////");
//primer metodo
//en el resultado aparecen todos los elementos incluso si no estan en el array
const arr = [1, 3, 1, 2, 5, 2, 3, 1, 2, 3, 3,6,6,8,8,8,8,8,9,9,9,9,9,9,9,9]
let uniqueElements = []
let maxNumber = Math.max(...arr) // ... spread operator / operador de propagacion
//contadores de elementos repetidos
let counters1 = []

for(i=0; i < maxNumber; i++){
    uniqueElements[i] = i+1
    counters1[i] = 0
}
uniqueElements.forEach( num => {
    arr.forEach( item => {
        if (item == num) {
           counters1[num-1] += 1
        }
    })
    console.log(num, "*".repeat(counters1[num-1]));
})

console.log("///////////SEUNDO METODO////////////");

//Segundo metodo
//en el resultado no aparece el 4 por que no hay 4s en el array
const myArray = [1,2,5,1,2,3,5,1,1,2]
let counters2 = {}
myArray.forEach(num => {
//  obj.key         obj.value           
    counters2[num] = (counters2[num] || 0) + 1
//la primera vez que se intenta sumar 1 al obj.value este es undefined por lo que undefined + 1 = error
//por eso se agregar || 0, para que se pueda hacer la suma    
})
let keys = Object.keys(counters2)
let values = Object.values(counters2)

for ( i in keys ) {
    console.log(keys[i],"*".repeat(values[i]))
}

// keys.forEach( (key, index) => {
//     console.log(key, "*".repeat(values[index]))
// })
        