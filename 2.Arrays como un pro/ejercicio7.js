function solution(array) {
    // Tu código aquí 👈
   return array.sort((a, b) => a.split(" ")[1] - b.split(" ")[1])
}; 

let array = [
    "Nicolas Molina",
    "Andrea Perez",
    "Zulema Vicente",
    "Juan Amador"
  ]

  console.log(solution(array))