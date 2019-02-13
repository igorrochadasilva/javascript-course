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