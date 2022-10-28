function media(elementos){
    soma=0
    for(let i = 0; i < elementos.length; i++)
    soma += elementos[i]

    return soma/elementos.length
    
}

console.log(media([1,2,3]))