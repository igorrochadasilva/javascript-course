const alunos = [
  { nome: 'Igor', nota: 10.0},
  {nome: 'Bruna', nota: 5.0},
]


// Imperativo
let total1 = 0
for(let i = 0; i < alunos.length; i++){
  total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

// declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const subtracao = (total, atual) => total - atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)
