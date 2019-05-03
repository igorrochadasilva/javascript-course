const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true},
  { nome: 'iPad Pro', preco: 4499, fragil: true},
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
  { nome: 'Copo de Plastico', preco: 1.99, fragil: false},
  { nome: 'teste de Plastico', preco: 5.99, fragil: true},

]

console.log(produtos.filter(function(p){
    return false
}))

const caro = produto => produto.preco >= 3000
const fragil = produto => produto.fragil
const barato = produto => produto.preco <= 10

console.log(produtos.filter(caro).filter(fragil))
console.log(`<br>`)
console.log(produtos.filter(barato))
console.log(`<br>`)
console.log(produtos.filter(fragil).filter(barato))