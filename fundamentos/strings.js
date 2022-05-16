const escola = "Cod3r"

console.log(escola.charAt(4)) ////imprime a caraqterisca q esta na posiçao 4 na string
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))/// pega valor na tabela UNICOUD/ASP
console.log(escola.indexOf('3'))// procura o valor 3 na istring

console.log(escola.substring(1))///pega todos os indices sem pegar o indice esplicitado
console.log(escola.substring(0, 3))// do indice 0 a 3 sem incluir o terceiro

console.log('escola '.concat(escola).concat( "!"))// para concatenar
console.log(escola.replace(3, 'e'))// subistiti o valor pelo outro

console.log('Ana, Maria, Pedro'.split(','))////////transforma uma string em array//////