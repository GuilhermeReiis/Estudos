//Closure é o escopo criado quando uma fnção é declarada
// Esse escoṕo permite a função acessar e ,anipular variaveis externas á função

//Contexto léxico em ação!

const x = "Global";

function fora() {
  const x = "Local";
  function dentro() {
    return x;
  }
  return dentro
}

const minhaFuncao = fora();
console.log(minhaFuncao());
