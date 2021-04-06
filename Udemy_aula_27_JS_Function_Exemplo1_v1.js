/*Exercício de Fixação Funções
Função sem retorno*/

function soma(a, b)
{
    console.log(a + b)
};

console.log('Funções sem retorno - Processamento no bloco de comandos')
soma(3, 4);
soma(12, 4);
soma('a', 4);
soma(2);
console.log('\n');
/*Função com retorno*/
function soma1(a = 0, b = 0)
{
    return ( a+b);
};

console.log('Funções com retorno - resultado apresentado por comando externo.')
console.log(soma1());
console.log(soma1(1));
console.log(soma1(1,5))