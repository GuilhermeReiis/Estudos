function imprimirSome(a, b) {
    console.log(a + b)
}

imprimirSome(2,3)
imprimirSome(2)

function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())