//sair da pasta .. e respeitar letras maiusculas e minusculas
const moduloA = require('../../moduloA')

console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC/index')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
  res.write('criado com sucesso')
  res.end()
}).listen(8080)