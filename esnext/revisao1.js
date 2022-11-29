// let e const 

// template String

const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const[l,e,...tras] = "Coder"
console.log(l,e,tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)