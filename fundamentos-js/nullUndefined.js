let valor //não inicializada
console.log(valor)

valor = null
console.log(valor)
//console.log(valor.toString())
s
const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco =  undefined //evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco para tirar um atributo de um objeto
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)