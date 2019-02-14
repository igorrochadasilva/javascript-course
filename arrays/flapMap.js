const escola = [
  {
    nome: "Turma N1",
    alunos: [
      {
        nome: "Gustavo",
        nota: 8.1
      },
      {
        nome: "Ana",
        nota: 9.3
      }
    ]
  },
  {
    nome: "Turma M2",
    alunos: [
      {
        nome: "Rebeca",
        nota: 8.9
      },
      {
        nome: "Roberto",
        nota: 7.3
      }
    ]
  }
]


const getNotaDoAluno = aluno => aluno.nota
const getNomeDoAluno = aluno => aluno.nome

const getNotaTurma = turma => turma.alunos.map(getNotaDoAluno)
const getNomeTurma = turma => turma.alunos.map(getNomeDoAluno)

const nota1 = escola.map(getNotaTurma)
const nome1 = escola.map(getNomeTurma)

console.log(nome1)
console.log(nota1)

console.log([].concat([1,2,3], [4,5,6]))

Array.prototype.flapmap = function(callback){
  return Array.prototype.concat.apply([], this.map(callback)) 
}

const notas2 = escola.flapmap(getNotaTurma)
console.log(notas2)