function criarPreço(nome, preco){
    return {
      nome,
      preco,
      desconto:0.1
    }
}

console.log(criarPreço('Notebook',1000.99, 10))
console.log(criarPreço('iPad',500.45, 100))