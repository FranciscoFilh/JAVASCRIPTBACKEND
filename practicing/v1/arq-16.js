const num = 15

if (num >= 0 && num <= 10) {
    console.log('número entre zero e dez')
} else if (num > 10 && num <= 20) {
    console.log('número entre dez e vinte')
} else if (num > 20 && num <= 30) {
    console.log('número entre vinte e trinta')
} else {
    console.log('outro número')
}

// IMPORTANTE: Ao trabalhar com múltiplas condições e else if, lembre-se sempre que cada condição e cada bloco (if, else if e else) deve representar condições excludentes entre si! Ou seja, não pode haver ambiguidade entre as condições - uma mesma condição válida tanto no if quanto no else if, por exemplo.