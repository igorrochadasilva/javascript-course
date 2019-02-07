//arguments é um array interno
function soma(){
  let soma = 0
  for(i in arguments){
    soma += arguments[i]
  }
  return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1,2,3,4))
console.log(soma(1.2,3.4,"Teste"))
console.log('a','b','c')
