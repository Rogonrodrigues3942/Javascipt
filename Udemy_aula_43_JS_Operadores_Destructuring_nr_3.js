/**Destructuring em uma função. */

function rand({min = 0, max = 1000}){
 const valor = Math.random()*(max-min)+min
 return Math.floor(valor)   
}

console.log('\nNúmeros Aleatórios')
const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min:855}))
console.log(rand({}))
console.log(rand({max:500}))
console.log(rand({min:500, max: 700}))