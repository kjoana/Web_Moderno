// usando if, else, else if
const imprimirResultado = function(nota) {
    if(nota > 6) {
        console.log('Aprovado!')
    } else if(nota==6) {
        console.log('Reposição!')
    }else {
        console.log('Reprovado!')
    }
}
imprimirResultado(10)
imprimirResultado(6)
imprimirResultado(4)

const imprimirResultado2 = function (nota) {
    switch (Math.floor(nota)) {
        case 10: case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}
imprimirResultado2(10)
imprimirResultado2(8.9)
imprimirResultado2(6.55)
imprimirResultado2(2.3)
imprimirResultado2(-1)
imprimirResultado2(11)


// while, do while
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != 1) {
    opcao = getInteiroAleatorioEntre(1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

// for, for in

for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}

for (let i in notas) {
    console.log(notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

// break e continue 
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}