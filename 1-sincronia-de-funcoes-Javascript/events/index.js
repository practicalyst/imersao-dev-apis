const EventEmitter = require("events"); // Classe abstrata
class MeuEmissor extends EventEmitter {}

const meuEmissor = new MeuEmissor();
const nomeEvento = "usuario:click";

meuEmissor.on(nomeEvento, (click) => {
  console.log("Um usuário clicou: ", click);
});

meuEmissor.emit(nomeEvento, "na barra de rolagem");
meuEmissor.emit(nomeEvento, "no ok");

// Se eu transformar isso aqui numa promise, não vai funcionar como o esperado
// a ideia da promise é executar uma única vez, enquanto que eventos são eventos contínuos
const stdin = process.openStdin();
stdin.addListener("data", (valor) => {
  const digitado = valor.toString().trim();
  console.log(`Você digitou: ${digitado}`);

  if (digitado === "barra") meuEmissor.emit(nomeEvento, "na barra de rolagem");
  else if (digitado === "ok") meuEmissor.emit(nomeEvento, "no ok");
});

// let count = 0;
// setInterval(() => {
//   meuEmissor.emit(
//     nomeEvento,
//     "usuário clicou na imagem em destaque " + count++
//   );
// }, 1000);
