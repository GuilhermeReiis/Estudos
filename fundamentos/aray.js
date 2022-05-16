const valores = [7.7, 9.0, 6.3, 9.2]
console.log(valores[0],  valores[3])
console.log(valores[4])

valores [4] = 10    //ATRIBUI O VALOR NO ARRAY
console.log(valores) 
console.log(valores.length) //APONTA O TAMANHO DO ARRAY

valores.push({id: 3}, false, null, 'teste')
console.log(valores)


// EXCLUI VALORES DO ARRAY
console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)