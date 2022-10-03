// em um objeto 

const pessoa = {
    nome: 'Ana',
    idade: 15,
    endereco:{
        rua : "vicente fialho",
        numero: 12
    }
}
const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

// em um array 

const[a] = [10]
console.log(a)

const [n1,,n3,,n5,n6 = 0] = [10,7,9,8]
console.log(n1,n3,n5,n6)

// usando em funções 

function rand({min=0, max=1000}){
    const valor = Math.random() * (max-min)+min
    return Math.floor(valor)
}
const obj ={max:50, min:40}
console.log(rand(obj))
console.log(rand({ min: 955 }))
console.log(rand({}))

function rand([min=0, max=1000]){
    if (min>max) [min, max]= [max,min]
    const valor = Math.random() * (max-min)+min
    return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([992]))
console.log(rand([,10]))
console.log(rand([]))



