let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2*a
}

dobro = (a) => 2*a
console.log(dobro(5))



dobro = a => 2 * a //return implicito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá'
console.log(ola())