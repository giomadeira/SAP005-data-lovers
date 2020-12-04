import {filtroNome,filtroStatus,filtroEspecie,filtroGenero} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

function mostrarCards(data) {
  let personagem = "";
  for (let elemento of data) {
    personagem += `
      <div class="card"> 
        <div class="card-informa">
          <div class="card-frente">
            <img src="${elemento.image}">
            <p><strong> Nome: ${elemento.name}</strong></p>
          </div> 
          <div class="card-verso">
            <ul class="info-por-valor">
            <li> Nome: ${elemento.name}</li>
            <li> Status de vida: ${elemento.status}</li>
            <li> Espécie: ${elemento.species}</li>
            <li> Tipo: ${elemento.type}</li> 
            <li> Gênero: ${elemento.gender}</li>
            <li> Localização: ${elemento.location.name}</li>
          </div>
        </div>
      </div>
    `
  }
  return document.getElementById("listagem").innerHTML = personagem
}
mostrarCards(data.results);

// let mostrarCalculo = document.getElementById("calculo-por-escolha");

function apresentaNome() {
  const seletorNome = document.getElementById("name").value;
  const nomeEscolhido = filtroNome(data.results, seletorNome);
  return mostrarCards(nomeEscolhido);
}

mostrarCards(data.results);
document.getElementById("btn-name").addEventListener("click", apresentaNome);

function apresentaStatus() {
  let seletorStatus = document.getElementById("status").value;
  let statusEscolhido = ""
  if (seletorStatus == "all-status") {
    return mostrarCards(data.results);
  } else {
    statusEscolhido = filtroStatus(data.results, seletorStatus);
  }
  return mostrarCards(statusEscolhido);
}
document.getElementById("status").addEventListener("change", apresentaStatus);

// let resultadoStatus = contaStatus(data.results,filtroStatus);
// console.log (resultadoStatus)
// mostrarCalculo.innerHTML= `Temos ${contaStatus(resultadoStatus)} % personagens dentro desta categoria`  
// console.log (mostrarCalculo)

function apresentaEspecie() {
  let seletorEspecie = document.getElementById("species").value;
  let especieEscolhido = ""
  if (seletorEspecie == "all-species") {
    return mostrarCards(data.results);
  } else {
    especieEscolhido = filtroEspecie(data.results, seletorEspecie);
  }
  return mostrarCards(especieEscolhido);
}
document.getElementById("species").addEventListener("change", apresentaEspecie);
// mostrarCalculo.innerHTML= `Temos ${contagemPorTipo(data.results, "species", seletorEspecie.value)} personagens dentro desta categoria`

function apresentaGenero() {
  let seletorGenero = document.getElementById("gender").value;
  let generoEscolhido = ""
  if (seletorGenero == "all-gender") {
    return mostrarCards(data.results);
  } else {
    generoEscolhido = filtroGenero(data.results, seletorGenero);
  }
  return mostrarCards(generoEscolhido)
};
document.getElementById("gender").addEventListener("change", apresentaGenero);
// mostrarCalculo.innerHTML= `Temos ${contagemPorTipo(data.results, "gender", generoEscolhido.value)} personagens dentro desta categoria.`



