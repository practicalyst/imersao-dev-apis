// 0 - Obter o usuário
// 1 - Obter o número de telefone de um usuário pelo ID
// 2 - Obter o endereço do usuário pelo ID

// O Famoso Callback Hell

function obterUsuario(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      Nome: "Arthur",
      dataNascimento: Date.now(),
    });
  }, 2000);
}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    if (idUsuario !== 1) return callback(true, {});

    return callback(null, {
      telefone: "99223344",
      ddd: 31,
    });
  });
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    if (idUsuario !== 1) return callback(true, {});

    return callback(null, {
      rua: "Rua Antedeguemon",
      numero: 0,
    });
  });
}

obterUsuario((erro, usuario) => {
  if (erro) {
    console.log("Erro, deu ruim aqui!");
    return;
  }

  obterTelefone(usuario.id, (erro2, telefone) => {
    if (erro2) {
      console.log("Erro, deu ruim aqui!");
      return;
    }

    obterEndereco(usuario.id, (erro3, endereco) => {
      if (erro3) {
        console.log("Deu erro, melhor olhar isso ai...");
        return;
      }
      console.log(
        `Nome: ${usuario.Nome}, Telefone: ${telefone.telefone}, Endereço: ${endereco.rua}`
      );
    });
  });
});
