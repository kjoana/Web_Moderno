function removerPropriedade(objeto, nomeDaPropriedade) {
    const copia = {...objeto}
    delete copia[nomeDaPropriedade]
    return copia
    }

    console.log(removerPropriedade({a:9, b:10}, 'a'))