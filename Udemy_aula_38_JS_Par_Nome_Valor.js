/**Par nome/valor 26/05/2020 */

const saudacao = 'Olá!'         //contexto léxico 1

function exec()
{
    const saudacao = 'Fallaa ai!'       //contexto léxico 2
    return saudacao
}

//Objeto é o aninhamento do cojunto de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro:  'Rua muito legal',
        numero: 594,

    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)