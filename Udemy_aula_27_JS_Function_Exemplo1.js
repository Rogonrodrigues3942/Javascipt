//função sem retorno
function imprimirSoma( a, b){
    console.log(a + b)
}

imprimirSoma(2 , 3)
imprimirSoma('Rogério ', 'Rodrigues')
imprimirSoma(2)

//2ª função sem retorno e sem parâmetros
function ola(){
    console.log("\nOlá mundo!\nLivro do Maujor.\n\n")
}

ola()

//3ª função com retorno
function soma1(a = 0, b = 0)
{
    return (a +b)
}

console.log(soma1(2, 4))
console.log(soma1(7))
console.log(soma1('Rafael ','Rodrigues'))
console.log(soma1())