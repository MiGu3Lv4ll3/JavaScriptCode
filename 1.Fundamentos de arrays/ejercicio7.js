// Tu desafío es crear un buscador usando funciones como filter y includes, 
// vas a tener array con palabras e tienes que retornar un array con sola las 
// que cumplan con la condición de tener el parámetro de búsqueda.

function solution(words, query){
    return words
    .filter((word) =>
        word.toLowerCase()
        .includes(query.toLowerCase()) 	);
}; 

function mySolution(words, query) {
    return words.filter(word => word.toLowerCase().match(query.toLowerCase()))
};

function mySolution2(words, query) {
    let re = new RegExp(query, 'gi')
    return words.filter(word => word.match(re))
};



let words = ["Ana", "santi", "nico", "anastasia"]

console.log(mySolution2(words, 'an'));