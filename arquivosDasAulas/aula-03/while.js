const prompt = require('prompt-sync')()
let contador = 0

while (contador < 10) {
    contador++
    console.log(contador)
}

while (true) {
    let saida = prompt('Informe s para sair: ')
    if ( saida.toLowerCase() === 's' ) {
        break
    }
}