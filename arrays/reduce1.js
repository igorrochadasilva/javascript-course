//reduce faz a soma dos valores

const alunos = [
  {nome: 'Joao', nota: 7.3, bolsista: false},
  {nome: 'Maria', nota: 9.2, bolsista: true},
  {nome: 'Jessica', nota: 2.2, bolsista: false},
  {nome: 'Igor', nota: 10.00, bolsista: true}
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)