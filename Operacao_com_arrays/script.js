// map = percorrer todo um array

// let list = ["nome1", "nome2", "nome3", "nome4"];

// list.map((item, index) => {
//   console.log(`passando pelo: ${item} - que está na posicao: ${index}`);
// });

// reduce

let numeros = [2, 4, 5, 8];

let total = numeros.reduce((acumulador, numero, indice, original) => {
  console.log(`${acumulador} - total ate o momento`);
  console.log(`${numero}  - valor atual`);
  console.log(`${indice} - indice atual`);
  console.log(`${original} - array original`);

  console.log("-".repeat(30));
  return (acumulador += numero);
});

console.log(`valor final do reduce: ${total}`);
