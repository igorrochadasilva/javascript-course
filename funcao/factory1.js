//factory é uma função que no final sempre retorna um novo objeto

//factory simples

function criarPessoa(){
  return {
    nome: 'Ana',
    sobrenome: 'Silva'
  }
}

console.log(criarPessoa())