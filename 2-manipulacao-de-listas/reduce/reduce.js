const { obterPessoa } = require("./service");

Array.prototype.MeuReduce = function (callback, valorInicial = 0) {
  let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0];

  for (let index = 0; index <= this.length - 1; index++) {
    valorFinal = callback(valorFinal, this[index]);
  }

  return valorFinal;
};

main();
async function main() {
  try {
    const { results } = await obterPessoa("a");
    const pesos = results.map((item) => parseInt(item.height));
    console.log("pesos", pesos);

    const somaPesos = pesos.reduce((ant, prox) => ant + prox);
    console.log("somaPesos", somaPesos);

    const minhaLista = [
      ["Imersao", "Dev"],
      ["Ping", "Back"],
      ["Eu quero", "Comprar", "Um", "Celta"],
    ];

    const total = minhaLista
      .MeuReduce((ant, prox) => {
        return ant.concat(prox);
      }, [])
      .join(", ");

    console.log(total);
  } catch (error) {
    console.error("Deu ruim", error);
  }
}
