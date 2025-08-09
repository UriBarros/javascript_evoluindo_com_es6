// find

let listagem = ["Jose", "Maria", "Antonio", 1, 4, 9];

let busca = listagem.find((item) => {
  if (item === 1) {
    console.log("encontrado com sucesso");
  }
});

let listaDeConvidados = [
  "Mariana Costa",
  "Lucas Almeida",
  "Ana",
  "Pedro Martins",
  "Camila Ribeiro",
  "Leo",
  "Fernanda Oliveira",
  "Rafael Souza",
  "Davi",
  "Larissa Pereira",
  "Caio",
  "Amanda Gomes",
  "Thiago Santos",
  "Bia",
  "Vinicius Lima",
  "Sofia Ferreira",
  "Rui",
  "Beatriz Alves",
  "Rodrigo Barbosa",
  "Eva",
];

let buscarNomes = listaDeConvidados.filter((item) => {
  return item.length <= 4;
});

console.log(buscarNomes);
