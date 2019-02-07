//objeto é uma coleção de chaves e valores.

const prod1 = {}
prod1.nome = 'Calcular ultra mega'
prod1.preco = 4998.90
prod1['desconto lega'] = 0.40 //evitar atributos com espaço



console.log(prod1)

const prod2 = {
    nome : 'camisa polo',
    preco: 79.90
}

//json é um formato textual
'{"nome": "Camisa Polo", "preco": "78,90"}'
console.log(prod2)

const a = {nome: 'teste'}
const b = a;
b.nome = 'opa'

let c = 3
let d = c
d++

console.log(a)
console.log(b)
console.log(c)
console.log(d)