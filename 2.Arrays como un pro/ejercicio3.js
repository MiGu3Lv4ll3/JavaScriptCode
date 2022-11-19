function solution(lines){
    return lines.flatMap(line => line.split(' ')).length;
};

let lines = [
            "Beautiful is better than ugly",
            "Explicit is better than implicit",
            "Simple is better than complex",
            "Complex is better than complicated",
            ]

console.log("cantidad de palabras:", solution(lines))