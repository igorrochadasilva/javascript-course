function tratarErroELancar(erro){
  //throw new Error('...')
  // throw 10
  // throw true
   //throw 'mensagem'
   throw{
     nome: erro.name,
     msg: erro.message,
     date: new Date
   }
}

function imprimirNomeGritado(obs) {
  //bloco de codigo que trate erro
  try {
    console.log(obj.name.toUpperCase() + "!!!")
  } catch (e) {
    tratarErroELancar(e)
  } finally {
    console.log('final')
  }
}

const obj = {
  nome: "IGOR"
}

imprimirNomeGritado(obj)
