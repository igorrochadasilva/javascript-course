const aprovados = ['Igor','Yuri','Vinicius','Erick']

// o primeiro parametro passado no foreach é sempre o conteudo do array
// o segundo parametro passado no foreach é sempre seu indice
//e o terceiro é sempre o array completo

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome  => console.log(nome))

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)
