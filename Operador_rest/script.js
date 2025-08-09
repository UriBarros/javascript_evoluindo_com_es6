function convidados(...nomes) {
  console.log("A lista de convidados: ");
  console.log(nomes);
}

convidados("Sara", "Yuri", "Beni", "Mariana", "Marx", "Miguel");

console.log("-".repeat(30));

function numeroSorteado(...numeros) {
  console.log(numeros);
  const gerarNumero = Math.floor(Math.random() * numeros.length);

  console.log(`O numero sorteado é: ${gerarNumero}`);
}

numeroSorteado(1, 2, 3, 4, 6, 7, 100, 44, 77, 1354, 5443, 8987);
