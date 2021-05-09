var nome = 'Yan Kaiky Augusto dos Santos';
var cargo = 'PROGRAMADOR';
var nomehtml = document.getElementById("nome-no-html");
var cargohtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");
var traducao = document.getElementById("traducao-en");

function colocarNomeNoHtml(nome) {
    nomehtml.innerHTML = nome;
}

function colocarCargoNoHtml(cargo) {
    cargohtml.innerHTML = cargo;
}

function clickNoTraducao(traducao) {
    traducao.innerHTML = traducao;
}

function logarNome() {
    console.log(nome);
}

function clickNoProjetos() {
    console.log("Clicou no botão projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function clickNoSobre() {
    console.log("Clicou no botão sobre");
    texto1.style.display = "block";
    texto2.style.display = "none";
}

colocarNomeNoHtml(nome);
colocarCargoNoHtml(cargo);