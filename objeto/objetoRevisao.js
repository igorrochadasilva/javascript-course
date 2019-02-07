// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['Marca do produto']
console.log(produto)

const carro = {
  modelo: 'A4',
  valor: 89000,

  proprietario:{
    nome:'Raul',
    idade: 10,
    endereço: {
        logradouro: 'Rua ABC',
        numero: 129
    }
  },
  condutores: [{
    nome: 'Junior',
    idade: 19
  }, {
    nome: 'Ana',
    idade: 42
    }],
    calcular: function(){
      //...
    }
}

carro.proprietario.endereço.numero

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereço
delete carro.calcular

console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)
