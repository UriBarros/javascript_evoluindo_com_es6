let pessoa = {
  name: "Yuri",
  age: 36,
  cargo: "costumer service",
};

// console.log(pessoa.age);

const { age, cargo, name } = pessoa;

console.log(age);
console.log(cargo);
console.log(name);

let frutList = ["Maca", "Pera", "Uva", "Salada", "Mamao"];

// console.log(frutList[2]);

// const { 0: Maca, 1: Pera, 2: Uva, 3: Salada, 4: Mamao } = frutList;

// console.log(Uva);

const [primeiraFruta, segundaFruta, terceiraFruta] = frutList;

console.log(primeiraFruta);
