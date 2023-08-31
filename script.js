// Exercicio 1
const salarios = [1000, 1200, 1300, 1400, 2000, 3000, 4000, 5000, 6000, 7000];

const salariosAtualizados = salarios.map(salario => {
  if (salario <= 2000) {
    return salario * 1.15;
  } else {
    return salario * 1.10;
  }
});

console.log(salariosAtualizados);

// Exercicio 2 
const salarios2500 = salariosAtualizados.filter(salariosAtualizados => salariosAtualizados > 2500);

console.log(salarios2500);

// Exercicio 3

const soma = salariosSuperiores2500.reduce((acumulador, salariosAtualizados) => {
  return acumulador + salariosAtualizados;
}, 0);

console.log(soma);