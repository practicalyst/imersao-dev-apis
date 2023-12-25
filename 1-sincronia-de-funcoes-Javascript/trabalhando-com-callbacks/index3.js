// 0 - Obter o usuário
// 1 - Obter o número de telefone de um usuário pelo ID
// 2 - Obter o endereço do usuário pelo ID

function obterUsuario() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        id: 1,
        Nome: "Arthur",
        dataNascimento: Date.now(),
      });
    }, 2000);
  });
}

function obterTelefone(idUsuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (idUsuario !== 1)
        return reject(new Error("Telefone não encontrado para esse usuário!"));

      return resolve({
        telefone: "99223344",
        ddd: 31,
      });
    }, 1500);
  });
}

function obterEndereco(idUsuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (idUsuario !== 1)
        return reject(new Error("Erro, endereço não encontrado para esse id!"));

      return resolve({
        rua: "Rua Antedeguemon",
        numero: 0,
      });
    }, 1000);
  });
}

// colocar async e ela automaticamente retornará uma promise
main();
async function main() {
  try {
    console.time("medida-promise");
    const usuario = await obterUsuario();
    // const telefone = await obterTelefone(usuario.id);
    // const endereco = await obterEndereco(usuario.id);

    // Sao independentes de si
    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEndereco(usuario.id),
    ]);

    const telefone = resultado[0];
    const endereco = resultado[1];

    console.log(
      `Nome: ${usuario.Nome}, Telefone: ${telefone.telefone}, Endereço: ${endereco.rua}`
    );
    console.timeEnd("medida-promise");
  } catch (error) {
    console.log("Deu ruim! -> ", error);
  }
}
