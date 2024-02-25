// execuções / chamadas
import { Cachorro } from './Cachorro.js'
import { Gatos } from './Gatos.js'

let bob = new Cachorro('Bob', 'Pug', 4)
let mel = new Gatos('Mel', 'Raça de alto nivel de definição', 4)

console.log(bob)
console.log(`Olá, sou o cãozinho ${ bob.obterNome }`)
console.log(`Eu tenho ${ bob.obterPatas } patas`)

function tipoMamifero(valor) {
    if ( valor === 'Miauuuu' ) {
        console.log('Você é dona(o) de um(a) gata(o)')
    } else if ( valor === 'Auauuuu' ) {
        console.log('Você é dona(o) de um(a) cachorra(o)')

    } else {
        console.log('Não foi possivel definir seu tipo de Mamifero')
    }
}

tipoMamifero(bob.late)
tipoMamifero(mel.mia)