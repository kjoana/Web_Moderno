function apenasNumeros(elementos){
    const resultado = []

    for(let item of elementos)
        if(typeof item === "number")
        resultado.push(item)

return resultado

}

console.log(apenasNumeros([1,2,3,"joana"]))