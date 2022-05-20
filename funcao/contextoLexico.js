const valor = 'Global'

function minhasFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhasFuncao()
}

exec()
