function qtdNegativo(vetor){
    let cont =0 
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i]< 0){
            cont++
        }
    }
    return cont
}

vetor = [-1, 2,3,-8,4,3,-2]
console.log(qtdNegativo(vetor))