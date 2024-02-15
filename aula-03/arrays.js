let meuArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(meuArray)
console.log(meuArray[6])

let novoArray = meuArray.slice()

console.log(novoArray)

// NO FINAL DO ARRAY
meuArray.pop()
meuArray.push(100)
// INICIO DO ARRAY
novoArray.unshift(10, 11, 12, 13, 14)
novoArray.shift()

console.table(novoArray)
console.table(meuArray)

for (indice in meuArray) {
    console.log(indice)
}

for (valor of meuArray) {
    console.log(valor)
}