const funcs = []

for(var i = 0; i < 10; i++)
{
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//Não tem escopo de função, por isso o valor a ser impresso é o 10 para qualquer posição de funcs.