const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


const  brasil = f => f.pais === 'Brazil'
const homenes = f => f.genero === 'M'
const maiorSalario = (func, funcAtual) => {
  return func.salario > funcAtual.salario ?func : funcAtual
}

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual
}



axios.get(url).then(response => {
  const funcionarios = response.data
  //console.log(funcionarios)
  // homens do brasil com maior salário.
  const funci = funcionarios.filter(brasil).filter(homenes).reduce(maiorSalario)
  console.log(funci)


  // mulher chinesa com menor salário?
  const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
  console.log(func)
})