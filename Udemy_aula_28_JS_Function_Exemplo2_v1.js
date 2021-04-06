/**Exercícios de fixação de conceitos. Funções alocadas em váriáveis */

const soma1 = function(a, b)
{
    return(a + b)
}

console.log('**Funções alocadas em variáveis**')
console.log(soma1())
console.log(soma1(2,1))

console.log('\n**Funções arrow alocadas em variáveis**');
const soma2 = (a, b) =>{return(a+ b)}
console.log(soma2(3,7))

console.log('\n**Funções arrow com retorno implícito em variáveis.**')
const subtracao = (a,b) => (a-b)
console.log(subtracao(3,4))