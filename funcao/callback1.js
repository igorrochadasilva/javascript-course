//evento é o forEach passando por cada elemento do vetor, e em cada um fazendo uma ação
const fabricantes = ["mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
  console.log(`${indice + 1} ${nome}`)
}


fabricantes.forEach(imprimir)

fabricantes.forEach(fabricante => console.log(fabricante))


// Callback é uma função que é usada como "callback". Ela é tipicamente passada como argumento de outra função
// e/ou chamada quando um evento for acontecido, ou quando uma parte de código receber uma resposta de que estava à espera.