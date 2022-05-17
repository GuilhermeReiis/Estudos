let nota = 10


function calcularNota(a) {
    if(a >= 10) {
         return console.log('Você esta bem acima do esperado!!!')
    }else if (a >= 8) {
         return console.log('Esta bem lega sua nota!')
    }else if (a >= 5) {
        return console.log('Voce esta na media ')
    }else {
         return console.log('Tu é burro euin!')
    }
}

calcularNota(nota)