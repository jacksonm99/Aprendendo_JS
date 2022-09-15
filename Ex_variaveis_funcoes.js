const nome = "Jackson";
const sobrenome= 'Silva';
const idade = 23;
const peso = 67;
const altura = 169;


function imc (peso, altura) {
  const alturaEmMt = altura / 100;
  let resultado = peso / (alturaEmMt * alturaEmMt)
  console.log(`Tem o IMC de ${resultado.toFixed(1)}. `); 
}

function anoNasc(idade) {
   const data = new Date();
   const anoAtual = data.getFullYear();
   const anoNasc = anoAtual-idade;
   console.log(`E nasceu em ${anoNasc}.`); 
}

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg.}`)
imc(peso,altura);
anoNasc(idade);
