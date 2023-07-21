console.log('Olá, Javascript')

var userName = 'João Hayden'

document.getElementById('user-name').innerHTML = userName

// variáveis //

var nome = 'Mestre Yoda'
var idade = 100
var jedi = true

// console.log(typeof nome)
// console.log(idade)
// console.log(jedi)


// Operadores Matemáticos

// var n1 = 7
// var n2 = 2.5

// console.log(typeof n1)
// console.log(typeof n2)

// + para somar
// - para subtrair
// * para multiplicar
// / para dividir

// var total = n1 / n2
// console.log(total)

// Operadores de comparação

// var v1 = 5
// var v2 = '5'

// var resultado = v1 !== v2
// console.log(resultado)

// function soma(n1, n2) {
//     console.log (n1 +n2)
// }

// soma(10,43)

// function boasVindas(nome) {
//     alert(nome + ', seja bem vindo(a)!')
// }

// boasVindas('João')

// function soma(n1, n2) {
//     return n1 + n2
// }

// var resultado = soma(5,5)
// console.log(resultado)


// Controle de Fluxos //

// Sendo um cliente correntista do banco
// Posso sacar dinheiro em caixas eletrônicos
// Para poder comprar em lugares que não aceitam o cartão de debito ou crédito

// Cenario 1: Saque com sucesso
// Dado que meu saldo é de 1000 reais
// Quando eu faço um saque de 500 reais
// Então o valor do saque deve ser deduzido do meu saldo

    // var saldo = 1000
    // function saque (valor) {
    //     saldo = saldo - valor
    // }

    // saque(500)
    // console.log(saldo)

// Cenario 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando eu faço um sauqe de 1001 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor não é permitido

    // var saldo = 1000
    //     function saque (valor) {
    //         if (valor > saldo) {
    //             console.log('Valor do saque superior ao saldo')
    //         } else {
    //             saldo = saldo - valor
    //         }  
    //     }

    // saque(1001)
    // console.log(saldo)

// Cenario 3: Saque com valor máximo
// Dado que meu saldo é de 1000 reais
// E o valor máximo por operação é de 700 reais
// Quando faço um saque no valor de 701 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido por operação

    // var saldo = 1000
    //     function saque (valor) {
    //         if (valor > saldo) {
    //             console.log('Valor do saque superior ao saldo')
    //         } else if (valor > 700){
    //             console.log('Valor do saque é superior ao máximo permitido por operação')
    //         } else {
    //             saldo = saldo - valor
    //         }
    // }

    // saque(701)
    // console.log(saldo)



// Arrays //

// var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']
// console.log(gaveteiro[3]) 

// var personagens =['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']
// console.log(typeof personagens)

// personagens.push('C-3PO')
// personagens.push('R2-D2')
// personagens.pop()

// personagens = personagens.filter(function(p){ //filtro onde p é cada personagem no array
//     return p !== 'Darth Vader'
// })

// personagens = personagens.filter(function(p){ //filtro onde p é cada personagem no array
//     return p === 'Mestre Yoda'
// })

// console.log(personagens)


// contorles de repetição (loops) //

var personagens =['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader','R2-D2']
//------------------------------//

// console.log(personagens[0])
// console.log(personagens[1])
// console.log(personagens[2])
// console.log(personagens[3])
//------------------------------//


//------------------------------//

// personagens.forEach(function(p){
//     console.log(p)
// })
//------------------------------//


//------------------------------//

// for (var i in personagens) {
//     console.log(personagens[i])
// }

//------------------------------//

// for (var i =0; i <= 10; i++) {
//     console.log(i) //codigo será executado até a condição retornar false
// }

//------------------------------//


