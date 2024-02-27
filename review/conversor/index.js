import { Conversor } from "./Conversor.js"

let meuValor = new Conversor(100, 'mm')
meuValor.converterParaKm()
meuValor.converterParaM()
meuValor.converterParaCm()

let meuValor2 = new Conversor(200, 'm')
meuValor2.converterParaKm()
meuValor2.converterParaMm()
meuValor2.converterParaCm()