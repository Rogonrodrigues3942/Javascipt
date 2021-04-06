/**Utilizando funções e array */

function rand([min = 0, max = 1000])
{
    if(min > max)
        [min,max] = [max, min]

    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

console.log(rand([50,40])) /**O comando if da função faz a inversão de min e max */
console.log(rand([992]))    /**A função toma o valor max de 1000 para excutar a operação */
console.log(rand([,10]))  /**A função toma o valor min de 0 para excutar a operação */ 
console.log(rand([]))
// console.log(rand()) -> parâmetros da function undefined
