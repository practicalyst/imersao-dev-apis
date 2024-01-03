const service = require("./service");

Array.prototype.meuMap = function (callback) {
  const arrayMapeado = [];

  for (let indice = 0; indice < this.length; indice++) {
    const resultado = callback(this[indice], indice);
    arrayMapeado.push(resultado);
  }

  return arrayMapeado;
};

main();

async function main() {
  try {
    const result = await service.obterPessoa("a");

    // const names = [];
    // result.results.forEach((item) => {
    //   names.push(item.name);
    // });

    // const names = result.results.map((item) => item.name);

    const names = result.results.meuMap((item, indice) => {
      return `${indice} - ${item.name}`;
    });

    console.log(names);
  } catch (error) {
    console.error("Erro: ", error);
  }
}
