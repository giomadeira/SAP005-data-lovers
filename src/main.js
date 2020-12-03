// toda a interação dos códigos exibidos na tela - dom
// eventListener ou eventHand


import {filtroGenero, filtroStatus, filtroEspecie, filtroNome} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';


// função para limpar cards

// function clearCards() {
// document.getElementById("item-all-cards").innerHTML = ""
// }

// para mostrar cards na tela chamando os elementos direto na função
function mostrarCards(data) {
  document.getElementById("listagem").innerHTML=data.map((elemento) => `
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
  `)
}
mostrarCards(data.results);


function apresentaGenero() {
  let seletorGenero=document.getElementById("gender").value;
  // console.log (seletorGenero)
  let generoEscolhido=filtroGenero(data.results,seletorGenero);
  // mostrarCalculo.style.display= "flex";
  // mostrarCalculo.innerHTML=  `Temos ${contagemPorTipo(data.results, "gender", generoSelecionar.value)} personagens neste filtro.`
  return mostrarCards(generoEscolhido);
}

mostrarCards(data.results);
document.getElementById("gender").addEventListener("change", apresentaGenero);

function apresentaStatus() {
  let seletorStatus=document.getElementById("status").value;
  let statusEscolhido=filtroStatus(data.results,seletorStatus);
  return mostrarCards(statusEscolhido);
}

mostrarCards(data.results);
document.getElementById("status").addEventListener("change", apresentaStatus);


function apresentaEspecie() {
  const seletorEspecie=document.getElementById("species").value;
  const especieEscolhido=filtroEspecie(data.results,seletorEspecie);
  return mostrarCards(especieEscolhido);
}

mostrarCards(data.results);
document.getElementById("species").addEventListener("change", apresentaEspecie);
 

function apresentaNome() {
  const seletorNome=document.getElementById("name-search").value;
  const nomeEscolhido=filtroNome(data.results, seletorNome);
  return mostrarCards(nomeEscolhido);
}

// mostrarCards(data.results);
// document.getElementById("btn-name").onclick.addEventListener("click",apresentaNome));



