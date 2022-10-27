const cantores = ['Joana', 'Melanie', 'Olivia', 'Joao']
cantores.pop() 
console.log(cantores)

cantores.push('Verstappen')
console.log(cantores)

cantores.shift() // remove o primeiro!
console.log(cantores)

cantores.unshift('Hamilton')
console.log(cantores)

// splice pode adicionar e remover elementos

// adicionar
cantores.splice(2, 0, 'Bottas', 'Zendaya')
console.log(cantores)

// remover
cantores.splice(3, 1) 
console.log(cantores)

const algunsCantores = cantores.slice(2) // novo array
console.log(algunsCantores)

const algunsCantores2 = cantores.slice(1, 4)
console.log(algunsCantores2)