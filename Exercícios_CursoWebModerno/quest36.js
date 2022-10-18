function multiplicacaVetor(vetor, numero){
     let resultado = []
    vetor.forEach(elemento => {
        resultado.push(elemento * numero) 
    });

    return resultado
}

vetor = [ 1,2,3]
console.log(multiplicacaVetor(vetor, 2))