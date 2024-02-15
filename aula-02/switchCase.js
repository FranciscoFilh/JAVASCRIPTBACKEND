const prompt = require('prompt-sync')()

let idade = Number(prompt('Favor informar sua idade: '))

switch (true) {
    case (idade >= 0 && idade < 12) :
        console.log('Você é uma criança')
        break;
    case idade >= 12 && idade < 18:
        console.log('Você é uma adolecente')
        break
    case idade >= 18 && idade < 60:
        console.log('Você é uma adulto')
        break
    case idade >= 60 && idade < 150:
        console.log('Você é idoso')
    default:
        console.log('Imposivel definir sua classificação')
        break
}

let mesNumero = Number(prompt('Informe o numero do mês que você nasceu: '))

switch (mesNumero) {
    case 1:
        console.log('Você nasceu em Janeiro')
        break
    case 2:
        console.log('Você nasceu em Fevereiro')
        break
    case 3:
        console.log('Você nasceu em Março')
        break
    case 4:
        console.log('Você nasceu em Abril')
        break
    case 5:
        console.log('Você nasceu em Maio')
        break
    case 6:
        console.log('Você nasceu em Junho')
        break
    case 7:
        console.log('Você nasceu em Julho')
        break
    case 8:
        console.log('Você nasceu em Agosto')
        break
    case 9:
        console.log('Você nasceu em Setembro')
        break
    case 10:
        console.log('Você nasceu em Outubro')
        break
    case 11:
        console.log('Você nasceu em Novembro')
        break
    case 12:
        console.log('Você nasceu em Dezembro')
        break
    default:
        console.log('Mês informado não é valido')
        break
}

let salario = Number(prompt('Informe seu salario: '))

switch(true) {
    case salario >= 1000 && salario <= 1500:
        console.log(`Seu deconto é de ${ salario * 0.1 }`)
        break
    case salario > 1500 && salario <= 3000:
        console.log(`Seu deconto é de ${ salario * 0.15}`)
        break
    case salario > 3000:
        console.log(`Seu desconto é de ${ salario * 0.2 }`)
        break
    default:
        console.log('Impossivel calcular seu desconto')
}