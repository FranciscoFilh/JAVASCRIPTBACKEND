// rest - é uma sintaxe que permite represetnar um numero de argumentos indefinidos em um Array

const cadastrar = (usuarios, ...novosUsuarios) => {
    let totalDeUsuario = [
        ...usuarios,
        ...novosUsuarios
    ]
    console.log(totalDeUsuario)
}

let usuarios = ['Neyva', 'Lara', 'Levi']

let novosUsuarios = cadastrar(usuarios, "Sedex", 'Gabriel', 'Kayro')
novosUsuarios = cadastrar(usuarios, "Sedex", 'Gabriel', 'Kayro', 'Jeferson', 'Junior', 'Anderson')



let numeros = (...meusNumeros) => {
    console.log(meusNumeros.length)
}

let novosNumeros = numeros(1, 2, 3)
novosNumeros = numeros(4, 5, 6)
novosNumeros = numeros(7, 8, 9)
novosNumeros = numeros(10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30)