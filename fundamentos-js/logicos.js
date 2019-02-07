function compras(trabalho1, trabalho2){
  const comprarSorvete = trabalho1 || trabalho2
  const comprarTv50 = trabalho1 && trabalho2
  //const comprarTv32 = !!(trabalo1 ^ trabalho2) // bitwise xor
  const comprarTv32 = trabalho1 != trabalho2 //diferente
  const manterSaudavel = !comprarSorvete // operador unário

  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
//ecmascript cria objeto reduzido
}

console.log(compras(true, true))
console.log('<br>')
console.log(compras(true, false))
console.log('<br>')
console.log(compras(false, true))
console.log('<br>')
console.log(compras(false, false))