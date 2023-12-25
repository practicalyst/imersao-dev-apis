// 0 - Obter o usuário
// 1 - Obter o número de telefone de um usuário pelo ID
// 2 - Obter o endereço do usuário pelo ID

// Ciclo de Vida das Promises:
// Pending - Estado inicial, ainda não terminou ou ainda está inicializando
// Fulfilled - Executou todas as informações com sucesso
// Rejected - Operação falhou

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
    });
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
    });
  });
}
const usuarioPromise = obterUsuario();
usuarioPromise
  .then((resultado) => {
    console.log("Resultado:", resultado);

    const usuarioTelefone = obterTelefone(resultado.id);
    usuarioTelefone
      .then((telefone) => console.log("Telefone: ", telefone))
      .catch((erro2) => console.log("Erro: ", erro2));

    const usuarioEndereco = obterEndereco(resultado.id);
    usuarioEndereco
      .then((endereco) => console.log("Endereço: ", endereco))
      .catch((erro3) => console.log(erro3));
  })

  .catch((erro) => {
    console.log("Erro: ", erro);
  });
