const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

//sem callblack
const notasBaixas1 = [];
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas1.push(notas[i]);
  }
}

console.log(notasBaixas1);

//com Callback
const notasbaixas2 = notas.filter(function (nota) {
  return nota < 7;
});

console.log(notasbaixas2);

const notasMenosQue7 = (nota) => nota < 7;
const notasbaixas3 = notas.filter(notasMenosQue7);
console.log(notasbaixas3);
