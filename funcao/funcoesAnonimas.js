const soma = function (x , y) {
return x + y
}

const imprimirResultado = function(a, b, operacao = soma){
console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y){
  return x - y
})

imprimirResultado(3,4, (x, y) => x * y)


const pessoa = {
  falar(){
    console.log('Opa')
  }
}

var fibonacci = function(num)
{
   if(num==1 || num==2)
       return 1;
   else
       return fibonacci(num-1) + fibonacci(num-2); 
};

console.log(fibonacci(3, 2))