function somaNumeros(elementos){
    soma=0
    for(let i = 0; i < elementos.length; i++)
    soma += elementos[i]

    return soma
}

console.log(somaNumeros([1,2,3]))