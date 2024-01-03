const { obterPessoa } = require("./service");

Array.prototype.meuFilter = function (callback) {
  const novoArray = [];

  for (let item of this) {
    if (callback(item, this)) novoArray.push(item);
  }

  return novoArray;
};

main();
async function main() {
  try {
    const { results } = await obterPessoa("a");

    console.time("meu filter");
    const familiaLarsMeuFilter = results.meuFilter(
      (item) => item.name.toLowerCase().indexOf(`lars`) !== -1
    );
    console.timeEnd("meu filter");

    console.time("filter");
    const familiaLarsFilter = results.filter(
      (item) =>
        // precisa retornar um boolean
        item.name.toLowerCase().indexOf(`lars`) !== -1
    );
    console.timeEnd("filter");

    const namesFilter = familiaLarsFilter.map((pessoa) => pessoa.name);
    const namesMeuFilter = familiaLarsMeuFilter.map((pessoa) => pessoa.name);

    console.log(namesFilter);
    console.log(namesMeuFilter);
  } catch (error) {
    console.error("Deu ruim", error);
  }
}
