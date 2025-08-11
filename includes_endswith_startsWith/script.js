// includes, endswith startsWith

let listaNomes = ["Maria", "Sara", "Mariana", "Ana", "Beni"];
console.log(listaNomes.includes("Yuri"));

if (listaNomes.includes("Mariana")) {
  console.log("Nome está na lista");
} else {
  console.log("Nome não está na lista");
}

console.log("-".repeat(20));

const url1 = "https://www.google.com";
const url2 = "http://meusite.com.br";
const url3 = "ftp://ftp.exemplo.com";

console.log("Exemplo 1 - startsWith:");
console.log(
  `A URL '${url1}' começa com 'https://'?`,
  url1.startsWith("https://")
); // Saída: true
console.log(
  `A URL '${url2}' começa com 'https://'?`,
  url2.startsWith("https://")
); // Saída: false
console.log(`A URL '${url3}' começa com 'ftp'?`, url3.startsWith("ftp")); // Saída: true

console.log("-".repeat(20));

function ehUsuarioVip(codigo) {
  // O método é sensível a maiúsculas/minúsculas (case-sensitive)
  return codigo.startsWith("VIP-");
}

const usuario1 = "VIP-12345";
const usuario2 = "NORMAL-98765";
const usuario3 = "vip-55555"; // 'v' minúsculo

console.log("\nExemplo 2 - startsWith:");
console.log(`O usuário '${usuario1}' é VIP?`, ehUsuarioVip(usuario1)); // Saída: true
console.log(`O usuário '${usuario2}' é VIP?`, ehUsuarioVip(usuario2)); // Saída: false
console.log(`O usuário '${usuario3}' é VIP?`, ehUsuarioVip(usuario3)); // Saída: false

console.log("-".repeat(20));

const arquivoImagem = "minha_foto_de_ferias.jpg";
const arquivoDocumento = "relatorio_mensal.pdf";

console.log("\nExemplo 1 - endsWith:");
console.log(
  `O arquivo '${arquivoImagem}' é um .jpg?`,
  arquivoImagem.endsWith(".jpg")
); // Saída: true
console.log(
  `O arquivo '${arquivoDocumento}' é um .jpg?`,
  arquivoDocumento.endsWith(".jpg")
); // Saída: false
console.log(
  `O arquivo '${arquivoDocumento}' é um .pdf?`,
  arquivoDocumento.endsWith(".pdf")
); // Saída: true

console.log("-".repeat(20));

const emails = [
  "contato@empresa.com",
  "aluno@escola.edu.br",
  "vendas@empresa.com",
  "outro@gmail.com",
];

const emailsDaEmpresa = emails.filter((email) =>
  email.endsWith("@empresa.com")
);

console.log("\nExemplo 2 - endsWith:");
console.log("E-mails que são da empresa:", emailsDaEmpresa);
// Saída: [ 'contato@empresa.com', 'vendas@empresa.com' ]
