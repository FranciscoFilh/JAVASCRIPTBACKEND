let gastoEnergia = 50
let limiteSegundos = 0
function atualizarContador() {
    gastoEnergia++
    limiteSegundos++
    console.log(gastoEnergia)
    if (limiteSegundos === 10) {
        clearInterval(intervalID); // Limite atingido, pare o intervalo
    }
}

let intervalID = setInterval(atualizarContador, 1000)
