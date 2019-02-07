Array.prototype.filter2 = function(callback){
  const newArray = []
  for(let i = 0;i < this.length; i++){
    if(callback(this[i], i, this)){
        newArray.push(this[i])
    }
  }
  return newArray
}


const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true},
  { nome: 'iPad Pro', preco: 4499, fragil: true},
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
  { nome: 'Copo de Plastico', preco: 1.99, fragil: false},
]

console.log(produtos.filter2(function(p){
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil
const barato = produto => produto.preco <= 10

console.log(produtos.filter2(caro).filter2(fragil))
console.log(`<br>`)
console.log(produtos.filter2(barato))