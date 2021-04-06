let valor

console.log(valor)

valor = null
console.log(valor)
//console.log(valor.toString())

const produto = {

} 

console.log(produto.preco)
produto.preco = 3.5
console.log(produto)

produto.preco = undefined
console.log(produto)

delete produto.preco 
console.log(produto)

produto.preco = null
console.log(produto)
console.log(!produto)
console.log(produto)