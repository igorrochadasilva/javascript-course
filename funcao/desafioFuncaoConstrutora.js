function Pessoa(nome,idade){
this.nome = nome
this.idade = idade

    this.falar = function(){
         console.log(`meu nome é ${this.nome}`)
    }

    this.idade = function(){
      console.log(`tenho ${idade} anos`)
    }
}

const p1 = new Pessoa('Joao',10)
p1.falar()


const p2 = new Pessoa('Fabio', 30)
p2.falar()
p2.idade()







function Soldado(arma, pais){
  this.arma = arma
  this.pais = pais

  this.grito = function(){
      console.log(`tudo pelo meu ${pais}`)
  }
}


const sd1 = new Soldado('m16','Brasil')
sd1.grito()