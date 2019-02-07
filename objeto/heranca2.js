// cadeia de prototipos (prototype chain)
Object.prototype.attr0 = "0"
const avo = { attr1: "A" }
const pai = { __proto__: avo, attr2: "B" }
const filho = { __proto__: pai, attr3: "C" }

console.log(filho.attr1)
console.log(pai.attr2)
console.log(pai.attr0)

const carro = {
  velAtual: 0,
  velMax: 200,
  aceleraMais() {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    } else {
      this.velAtual = this.velMax
    }
  },
  status() {
    return `${this.velAtual}km/h de max:${this.velMax}`
  }
}

const ferrari = {
  modelo: "F40",
  velMax: 324 //shadowing
}

const volvo = {
  modelo: "V40",
  status() {
    return `${this.modelo}: ${super.status()}`
  }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

