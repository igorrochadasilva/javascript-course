//utilizar funções construtoras com classes


class Lancamentos {
  constructor(nome = 'Generico', valor = 0){
    this.nome = nome
    this.valor = valor
    console.log(nome, valor)
  }
}

class CicloFinanceiro{
  constructor(mes, ano){
    this.mes = mes
    this.ano = ano
    this.lancamentos = []
  }

  addLancamentos(...lancamentos){
    lancamentos.forEach(l => this.lancamentos.push(l))
    console.log(lancamentos)
  }

  sumario(){
    let valorConsolidado = 0
    this.lancamentos.forEach(l => {
        valorConsolidado += l.valor
    })
    return valorConsolidado
  }
}

const salario = new Lancamentos('Salario',4500)
const contaDeLuz = new Lancamentos('Luz',-220)
const contaAgua = new Lancamentos('Agua',-1000)
const contas = new CicloFinanceiro(4, 2019)

contas.addLancamentos(salario, contaDeLuz, contaAgua)
console.log(contas.sumario())
