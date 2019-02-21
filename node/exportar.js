console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

//this e exports são apenas referencias para o mesmo objeto que module.exports aponta
this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'
}

console.log(module.exports)

//atribuir objeto a ser exportado, usar module.exports
module.exports = {publico: true}


