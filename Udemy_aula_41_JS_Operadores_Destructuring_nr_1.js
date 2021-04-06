/**Destructuring foi introduzido pelo ECMA2015 */

const pessoa = {
    nome:'Rogério',
    idade: 49,
    endereco:{
        logradouro: 'Rua Barrania',
        numero: 599
    }

}

const {nome, idade} = pessoa    /**Comando destrucutring em um objeto */
console.log(nome, idade)

const {nome: n, idade: i} = pessoa   //**Comando atribuindo  váriável a propriedade na estrutura de destructuring. */
console.log(n,i)
console.log(nome, idade)

const {sobrenome: s, humor: h = true} = pessoa  /** Manipulando propriedades não existentes no objeto pessoa. */
console.log(s, h)

const {endereco: {logradouro: l, numero: nr, cep: cp}} = pessoa
console.log(l, nr, cp)