// novo recurso no ES2015

const pessoa = {
  nome: 'Igor',
  idade: 20,
  endereco:{
    logradouro: 'Rua ABC',
    numero: 1000
  }
}

//tire de dentro do objeto o atributo nome e idade.
const { nome, idade } = pessoa
console.log(nome , idade)

const { nome: n, idade: i  } = pessoa
console.log(n , i)

const{sobrenome = null, bemhumorada = true} = pessoa
console.log(sobrenome, bemhumorada)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)