//parametros e retornos são opcionis, utilize de acordo com cada situação.

function area(largura, altura){
    const area = largura * altura
    if(area > 20){
      console.log(`Valor acima do permitido: ${area}m2.`)
    }else{
      return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2,10,5,6,10,22,102))
console.log(area(5,5))