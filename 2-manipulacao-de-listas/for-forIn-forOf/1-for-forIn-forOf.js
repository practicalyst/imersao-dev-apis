const service = require("./service");

main();
async function main() {
  try {
    console.time("api");
    const result = await service.obterPessoa("a");
    console.timeEnd("api");

    const names = [];

    console.time("for");
    for (let i = 0; i < result.results.length; i++) {
      const pessoa = result.results[i];
      names.push(pessoa.name);
    }
    console.log(names);
    console.timeEnd("for");

    names.length = 0;

    console.time("forIn");
    for (let i in result.results) {
      const pessoa = result.results[i];
      names.push(pessoa.name);
    }
    console.log(names);
    console.timeEnd("forIn");

    console.time("forOf");
    for (let pessoa of result.results) {
      names.push(pessoa.name);
    }
    console.log(names);
    console.timeEnd("forOf");
  } catch (error) {
    console.error("50% açucar 50% mel : ", error);
  }
}
