function tratarErrorELancar(erro) {
    throw {
        nome: erro.name,
        msg: erro.message,
        data: new Date
    }
}

function imprimirNOmeGritado(obj) {
    try {
        console.log(obj.name.tuUpperCase()+'!!!')
    } catch (e){
        tratarErrorELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = {nome: 'Guilherme'}
imprimirNOmeGritado(obj)