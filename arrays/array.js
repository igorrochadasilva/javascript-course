console.log(typeof Array, typeof new Array, typeof [] )

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

//adicionar novo elemento
aprovados[3] = 'Paulo'
aprovados.push('Leo')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])

aprovados = ['Bia', 'Emma', 'Ana','Jao','Pedro']
aprovados.splice(5, 0, 'Elemento1', 'Elemento2')
console.log(aprovados)