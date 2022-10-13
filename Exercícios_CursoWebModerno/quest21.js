function calcularPreco(idade){
    const valorFixo = 100.0
    
    if(idade < 10){
        return valorFixo + 80
    } else if(idade < 30) {
        return valorFixo + 50
    } else if (idade < 60) {
        return valorFixo + 95
    } else {
        return valorFixo + 130
    }
    }
    
    console.log(calcularPreco(8));
    console.log(calcularPreco(15));
    console.log(calcularPreco(35));
    console.log(calcularPreco(52));
    console.log(calcularPreco(80));
