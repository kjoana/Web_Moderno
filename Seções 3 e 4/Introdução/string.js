const nome = "Joan2"

console.log(nome.charAt(4)) // determinado caractere de um string
console.log(nome.charCodeAt(3))// código do carcatere
console.log(nome.indexOf('J')) // índice do caractere

console.log(nome.substring(1)) // chamada pelos índices
console.log(nome.substring(0, 3))

console.log('Nome '.concat(nome).concat("!")) // concatena strings
console.log('nome ' + nome + "!") 
console.log(nome.replace(2, 'e')) 

console.log('Ana,Maria,Pedro'.split(',')) // quebra a string em array