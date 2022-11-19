// Dado un array de string que son nombres de cartas de poker debes retornar la palabra "AS" 
// si dentro de tu baraja tienes un "AS" y un false si no lo tienes.

function solution(cards){
    const rta = cards.find((item) => item === 'AS');
    return rta || false;
};

function solution1(cards) {
    // devuelve true o false dependiendo de si existe o no
    return cards.includes('AS')
};

function solution2(cards) {
    //devuelve el indice del elemento
    return cards.indexOf('AS')
};

function solution3(cards) {
    //devuelve el elemento o undefined si no lo encuentra
    return cards.find(card => card==='AS')
};

function solution4(cards) {
    //devuelve un array con las coincidencias o un array vacio de no encontrar coincidencias
    return cards.filter(card => card==='AS')
};

let cards = ['diamonds', 'hearts', 'spades', 'AS']
let cards2 = ['diamonds', 'hearts', 'spades']

console.log(solution(cards))
console.log(solution(cards2))