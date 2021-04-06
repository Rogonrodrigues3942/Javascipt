console.log('\n')

function compras(job1, job2)
{
    const tomarSorvete = job1 || job2
    const buyTv50 = job1 && job2
    // const buyTv32 = !!(job1 ^ job2) exemplo de Xor
    const buyTv32 = job1 != job2
    const vidaSaudavel = !tomarSorvete

    return{tomarSorvete, buyTv50, buyTv32, vidaSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))