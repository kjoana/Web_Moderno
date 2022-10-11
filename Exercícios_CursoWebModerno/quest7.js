function baskara( a, b ,c){
    let resultados = []
    let delta = (b**2) - 4*a*c
    if (delta < 0){
       return "Delta Negativo" 
    }else{
        var x1 = (-b + Math.sqrt(delta))/ 2*a
        var x2 = (-b - Math.sqrt(delta))/ 2*a
        resultados.push(x1)
        resultados.push(x2)
       }
    return resultados
}

console.log(baskara(1,12,-13))
console.log(baskara(1,-14,50))
console.log(baskara(4,-4,1))
