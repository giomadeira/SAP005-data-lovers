// toda a interação dos códigos exibidos na tela - dom
// eventListener ou eventHand

import {filtroNome, filtroEspecie, filtroGenero,filtroStatus} from './data.js';
import results from './data/rickandmorty/rickandmorty.js';

console.log(results);

//const nameCharacter = document.querySelector
//console.log (data)

//for (persona of rickandmorty){
  //  console.log(name)
//}


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


//function mostrarDados (data){
  //if(data.lenght !=0){
    //data.forEach(element => {
       //let criarDiv = 


    //})
// }
//}




