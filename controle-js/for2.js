const notas = [10, 1.0, 5.5, 6.7]

for (i in notas){
  console.log(i, notas[i])
}

const pessoa = {
  nome: 'Ana',
  idade: 18,
  sobrenome: 'Maria',
  peso: 100
}

for(let atributo in pessoa){
  console.log(`${atributo} = ${pessoa[atributo]}`)
}
