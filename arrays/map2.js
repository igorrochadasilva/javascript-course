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


const sellers = [
  { sellerId: 'RiHappy', price: 120.00, frete: 50, dias: 2},
  { sellerId: 'MMPLACE', price: 10.00, frete: 10, dias: 24},
]

const calculo = sellers => sellers.price + sellers.frete + (sellers.dias * 1.5);
const idSeller = sellers => sellers.sellerId;

const valor = sellers.map(calculo);
const seller = sellers.map(idSeller);

var arrayFinal = [];
  
seller.forEach(function(e, i){
  arrayFinal.push({idseller:e ,price: valor[i]})
});

const resultadoFinal = arrayFinal.reduce(function(prev, curr) {
  return prev.Cost < curr.Cost ? prev : curr;
});

console.log(resultadoFinal);


