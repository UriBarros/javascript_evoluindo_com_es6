let firstNum = [1, 2, 3, 4, 5];
let secundNum = [...firstNum, 6, 7, 8, 9, 10];

console.log(firstNum);
console.log(secundNum);

console.log("-".repeat(30));

let pessoa = {
  nome: "Yuri",
  sobreNome: "Araujo",
  cargo: "Costumer Service",
};

let pessoaNova = {
  ...pessoa,
  token: "1234",
  ativo: true,
};

console.log(pessoa);
console.log(pessoaNova);

console.log("-".repeat(30));

function novoUsuario(info) {
  let dados = {
    ...info,
    cargo: "Medico Residente",
    local: "IJF",
  };

  console.log(dados);
}

novoUsuario({ nome: "Benicio", sobreNome: "Macedo", ativo: false });
