console.log(Math.ceil(6.2))

const obj1 = {}
obj1.nome = 'bola'
console.log(obj1)

function obj(nome) {
    this.nome = nome
}

const obj2 = new obj('cadeira')
const obj3 = new obj('mesa')

console.log(obj2.nome)
console.log(obj3.nome)