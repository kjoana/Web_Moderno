function media(vetor){
    let soma = 0
    for(let i =0; i < vetor.length; i++ ){
        soma += vetor[i]
    }
    return soma/vetor.length
}

vetor = [10,8,7,6,5]
console.log(media(vetor))