// toda a interação dos códigos exibidos na tela - dom
// eventListener ou eventHand

// import {filtroNome, filtroEspecie, filtroGenero,filtroStatus} from './data.js';
// import results from './data/rickandmorty/rickandmorty.js';


//const nameCharacter = document.querySelector
//console.log (data)

//for (persona of rickandmorty){
  //  console.log(name)
//}

import {filterStatus} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

//pegar id root da pagina - pesquisar
const conteudo = document.querySelector("#root")
const cards = document.querySelector("#cards");
//pegar os selecionadores
const selecaoStatus = document.querySelector("#select-status");
const selecaoOrdem = document.querySelector(".asc-order");

//corrigir forma que chama as id de acordo com a api

const imagemPersonagem = document.querySelector("image")
console.log(imagemPersonagem);
const nomePersonagem= document.querySelector("#name");
console.log(nomePersonagem);
const statusDeVida = document.querySelector("#status");
const especie = document.querySelector("#specie");
const tipo = document.querySelector("#type");
const genero = document.querySelector("#gender");
const localizacao = document.querySelector(".location-name");
const episodioAparece = document.querySelector("#episode");
const ordenacao = document.querySelector("#order");


function mostrarCards (data) {
  document.getElementById ("listagem").innerHTML = data.map((elemento) => `
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

