function receberSomenteOsParesDeIndicesPares(numeros) {
    let resultado = []
    for(let i = 0; i < numeros.length; i += 2){
    const numeroPar = numeros[i] % 2 === 0
    if(numeroPar)
    resultado.push(numeros[i])
    }
    return resultado
    }

console.log(receberSomenteOsParesDeIndicesPares([1,2,2,3,3,4]))