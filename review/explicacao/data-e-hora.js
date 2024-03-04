let dataAtual = new Date()
console.log(dataAtual)
let dia = new Date('2024-10-05').getDay()
console.log(dia)
let mes = new Date('2024-05-05').getMonth()
console.log(mes)
let ano = new Date('2024-10-05').getFullYear()
console.log(ano)
let minhaData = new Date("December 25, 1995 23:15:30")
let minhaHora = minhaData.getHours()
console.log(minhaHora)

let hora = '22:17:34'
let soHora = hora.split(':');
let horas = parseInt(soHora[0]);
console.log(soHora)