//comentário de uma linha 
/*comentário de múltiplas linhas*/

// Exercício 1 - Exebir os números ímpares, depois pares

{
    console.log(1);
    console.log(3);
    console.log(5);
    console.log(7);
    console.log(9);
}

{
    console.log(2);
    console.log(4);
    console.log(6);
    console.log(8);
    console.log(10);
}

// Variáveis - 

var quantidade = 10; // poderia usar o let pra declarar 
var preco = 6.9;
var imposto= 2.0;
console.log("Quantidade:",quantidade);
console.log("Preço:", preco);
console.log("Total: ",preco+imposto);

// Exercício 2 - Área da circunferência

const PI = 3.141592;
var raio = 8;
var area = PI*raio*raio;
console.log("Área: ",area);

// Exercício 3 - Troca de Valores

let a = 7;
let b = 8;
let temp = a;
a = b;
b = temp;
console.log(a);
console.log(b);