//funcao sem retorno
function imprimirSoma(a, b){
    console.log(a +' '+ b)
}

imprimirSoma('igor', 'rocha')
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)
imprimirSoma()

//funcao com retorno
function soma(a, b = 0){
  return a + b
}

console.log(soma(4,3))
console.log(soma(4))

//funcoes 

function juntarNomes(firstName, secondName,age ){
  console.log(firstName+' '+secondName+' e sua idade é: '+age+ ' anos')
}
juntarNomes('igor', 'rocha', 20)


function somandoEsubtraindo(valor1, valor2, valor3){
 valor4 = valor1 + valor2 - valor3;
 return valor4;
}

console.log(somandoEsubtraindo(40, 20, 30))