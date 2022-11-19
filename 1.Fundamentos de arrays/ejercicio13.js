//Dado un array de strings existe la palabra clave "myKey" y debes retornar 
//la posición dentro del array en donde se encuentra este string y si no está debes retornan un false.

function solution(words) {
    // Tu código aquí 👈
   if (words.includes('myKey')) {
       console.log( words.indexOf('myKey') )
   }else{
       console.log(false)
   }
}; 

solution(["diamonds", "myKey", "spades", "AS"]);
solution(["diamonds", "hearts", "spades"]);
solution(["myKey", "hearts", "spades"]);