//armazenando uma função em uma variavel

const imprimirSoma = function (a, b){
  console.log(a+b)
}

imprimirSoma(2, 3)

//armazenando uma função arrow em uma variavel / => substitui nome function

const soma = (a, b) => {
  return a + b
}

console.log(soma(2, 3))

//retorno implicito

const subtracao = (a, b) => a - b

console.log(subtracao(3,5))

const imprimir2 = a => console.log(a)