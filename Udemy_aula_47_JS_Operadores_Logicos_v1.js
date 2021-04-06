console.log(' 1ª Versão de fixação\n')

function comprar(job1, job2)
{
    const tomarSorvete = job1 || job2
    const buyTv50 = job1 && job2
    const buyTv32 = job1 != job2
    const vidaSaudavel = ! tomarSorvete

    return {tomarSorvete, buyTv50, buyTv32, vidaSaudavel}
}

console.log(comprar(true,true))
console.log(comprar(true, false))
console.log(comprar(false, true))
console.log(comprar(false,false))