const carrinho = [
  '{"nome": "Borracha", "preco": 3.45 }',
  '{"nome": "Caderno", "preco": 13.90 }',
  '{"nome": "Kit de Lapis", "preco": 41.22 }',
  '{"nome": "Caneta", "preco": 7.50 }',
]


const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const apenasNome = produto => produto.nome

const resultado1 = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado1)

const resultado2 = carrinho.map(paraObjeto).map(apenasNome)
console.log(resultado2)