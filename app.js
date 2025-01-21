let amigos = [];

function adicionarAmigo() {
  let campoResultado = document.getElementById("resultado");
  campoResultado.innerHTML = "";
  let nome = document.querySelector("input").value;
  if (nome.length > 0) {
    amigos.push(nome);
    atualizarLista();
    console.log(amigos);
    limparCampo();
  } else {
    alert("Por favor, insira um nome válido.");
  }
}
function sortearAmigo() {
  if (amigos.length >= 1) {
    let nomeAleatorio = amigos[parseInt(Math.random() * amigos.length)];
    amigos = [];
    console.log(nomeAleatorio);
    let campoResultado = document.getElementById("resultado");
    campoResultado.innerHTML = `<li>O amigo secreto sorteado é: ${nomeAleatorio}</li>`;
    atualizarLista();
  } else {
    alert('Não é possível sortear uma lista vazia.');
  }
}
function atualizarLista() {
  let campo = document.querySelector("ul");
  let nomes = "";
  amigos.forEach((element) => {
    nomes += `<li> ${element}</li>`;
  });
  campo.innerHTML = nomes;
}
function limparCampo() {
  campoResultado = document.querySelector("input");
  campoResultado.value = "";
}