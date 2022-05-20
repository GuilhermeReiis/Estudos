let Pessoa = new Object
let Carro = {nome:'', marca:'', km:'', portas:'', valor:'',}

Pessoa.nome = 'Guilherme'
Pessoa.idade = 22
Pessoa.profissao = 'programador'
Pessoa.status = true
Pessoa.carteira = 30.45

let Ferrari = new Object
Ferrari.nome = 'Spider'
Ferrari.marca = 'Ferrari'
Ferrari.km = 1200
Ferrari.portas = 2
Ferrari.valor = 1500000.00


const getName = (objeto) => objeto.nome;
const getAge = (objeto) => objeto.idade;
const getJob = (objeto) => objeto.profissao;

console.log(getName(Pessoa));
console.log(getAge(Pessoa));
console.log(getJob(Pessoa));
console.log(Pessoa.status);
console.log('R$:',Pessoa.carteira)


console.log(Ferrari.nome)
console.log(Ferrari.marca)
console.log(Ferrari.km)
console.log(Ferrari.portas)
console.log(Ferrari.valor)

