const notas = [7.7 , 10.0, 6.1, 7.0, 5.8, 4.3]


//sem callback
let notasbaixas1 = []
for  (let i in notas){
  if(notas[i] < 7){
    notasbaixas1.push(notas[i])
  }
}

console.log(`1) ${notasbaixas1}`)


// Com callback
notasbaixas2 = notas.filter(function (nota){
  return nota < 7
})

console.log(`2) ${notasbaixas2}`)

//Com callback mais limpo
const notasMenorQue7 = (nota) => nota < 7
const notasbaixas3 = notas.filter(notasMenorQue7)
console.log(`3) ${notasbaixas3}`)