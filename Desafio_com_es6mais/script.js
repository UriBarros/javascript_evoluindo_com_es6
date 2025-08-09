// A lista produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado Exiba essa lista no console quando abrir o index.html.
let productList = ["Computador", "Telefone", "Mouse", "Teclado"];

console.log(`lista de produtos: ${productList}`);
console.log("-".repeat(30));

// Mostre no console quantos produtos tem nessa lista.
let quantDaList = productList.length;

console.log(`tem no total: ${quantDaList} na lista`);
console.log("-".repeat(30));

// Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.

console.log("Antes " + productList);
productList.splice(2, 1);
console.log("Depois " + productList);

console.log("-".repeat(30));

// Crie uma lista de apenas numeros 1,3,5,7,0,9​
//Ordene essa lista do menor para o maior.
let listNum = [1, 3, 5, 7, 0, 9];
console.log(listNum.sort());

console.log("-".repeat(30));

//Retire o primeiro numero desta lista.

console.log(`array antes: ${listNum}`);
console.log(`retirado primeiro numero do array: ${listNum.shift()}`);
console.log(`array depois: ${listNum}`);

console.log("-".repeat(30));

// Inverta toda ordem da sua lista por exemplo: [1,3,5,7,9] para [9,7,5,3,1]

console.log(listNum.reverse());
console.log("-".repeat(30));

// Crie uma string que contenha o dia de hoje, exemplo:
// let hoje = '20/07/2019';
//  Separe essa data em variaveis dia onde contenha apenas o dia, mes onde contenha apenas o mes, e ano onde contenha apenas o ano.

let dataHoje = "09/08/2025";

let dia = "09";
let mes = "08";
let ano = "2025";

console.log(`hoje é dia ${dia}/${mes} de ${ano}`);
