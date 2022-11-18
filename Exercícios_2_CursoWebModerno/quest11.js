function apagaPropriedade(objeto, nomePropriedade) {
    const copia = {...objeto}
    delete copia[nomePropriedade]
    return copia
    }

    console.log(apagaPropriedade({a:9, b:10, c:15}, 'a' ))