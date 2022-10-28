function cumprimentar(nome){
    const saudacao = 'Olá'
    return[saudacao,nome].join(',').concat("!")

    //return "Olá, " + nome + "!"
    //return `Olá, ${nome}!`
}

console.log(cumprimentar("Joana"))