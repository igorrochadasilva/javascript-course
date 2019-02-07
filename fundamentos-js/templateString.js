const nome = "Rebeca";
const concatenacao = "ola " + nome + "meio 1";

const template = `
olá ${nome} meio 2!`;

console.log(concatenacao, template);

//expressoes...
console.log(`1 + 1 = ${2 + 2}`);

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)