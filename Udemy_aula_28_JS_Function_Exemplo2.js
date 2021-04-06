//Aramazernando uma funçção em uma variável.

const imprimirSoma = function(a = null, b = null)
{
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma()

//Armazenando uma função arrow em uma variável
const soma1 = (a, b) =>
{
    return (a+b)
}

console.log(soma1(0, 2))

//Retorno implicito com arrow
const soma2 = (a, b) => a -b
console.log(soma2(4, 1))