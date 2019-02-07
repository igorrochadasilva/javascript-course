console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'bola'
// obj1['']

console.log(obj1.nome)

function Obj(nome){
  this.nome = nome
  this.exec = function(){
    console.log('Executando...')
  }
}

const obj2 = new Obj('Cadeira') 
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
//this defini o atributo como publico, podendo utilizar fora da funçãi.