const alunos = [
  {nome: 'Joao', nota: 7.3, bolsista: false},
  {nome: 'Maria', nota: 9.2, bolsista: true},
  {nome: 'Jessica', nota: 2.2, bolsista: false},
  {nome: 'Igor', nota: 10.00, bolsista: true}
]

console.log(alunos.map(a => a.nota))

//desafio 1: todos os alunos são bolsista?
const todosSaoBolsista = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosSaoBolsista))



//desafio 2: algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))