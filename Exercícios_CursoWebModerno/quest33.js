vetorInteiro = [1,2,3,4]
vetorString = ['a', 'b', 'c', 'd']
vetorDouble = [1.1 , 2.2, 3.3, 4.4]

function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble, vetorString))
