//funcao em js é first-class object (Citizens)
// higher-order function - 


//criar funções de formas literais
function fun1(){}


// armazenar em uma variavel

const fun2 = function(){ }

//armazenar em um array
const array = [function(a, b){ return a + b}, fun1, fun2]
console.log(array[0](1,2))


//armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

//passar função como param
function run(fun){
  fun()
}

run(function () {console.log('Executando...')})

//Uma função pode retornar/conter uma função
function soma(a, b) {
  return function(c){
      console.log(a+b+c)
  }
}

soma(2, 3)(4)
const cincoMais = soma(1,2)
cincoMais(4)