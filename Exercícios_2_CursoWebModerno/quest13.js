function objetoParaArray(objeto) {
    const resultado = []
    for (let chave in objeto)
    resultado.push([ chave , objeto[chave] ])
    return resultado
    }

    
console.log(objetoParaArray({codigo:11, nome:'joana'}))