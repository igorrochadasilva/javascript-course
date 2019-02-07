const pilotos = ['Vetel','Alonso','Raicone', 'Massa']
pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //inseri um elemento no final do array
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento!
console.log(pilotos)

pilotos.unshift('Hamilton') //inseri um elemento como primeiro elemento
console.log(pilotos)

//adicionar
pilotos.splice(2,0, 'Bottas','Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1) //massa foi removido
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)