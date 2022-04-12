import { ordemAlfabetica, filtrarNome, calcularPorcentagem } from './data.js';

import data from './data/pokemon/pokemon.js';

let dadosPokemons = data.pokemon;

function imprimePokemons(data) {
    const card = document.getElementById("grupoCard");
    card.innerHTML = data
      .map(
        (item) => `
      <div class="card">
        <img src="${item.img}" alt="${item.name}">
        <div class="textCard">
         <p class="titulo1 titulo1card">${item.name}</p> 
         <p class="titulo3 titulo3card">Pokemon-rarity: <br> ${item["pokemon-rarity"]}</p>
         <p class="titulo3 titulo3card">Distance egg: <br> ${item.egg}</p>
        </div>
      </div>`
      )
      .join("");
  }
  imprimePokemons(dadosPokemons);

 const ordemAlfa = document.getElementById("filtroOrdenar"); 

 ordemAlfa.addEventListener("change", (e) => {
    const ordemEscolhida = e.target.value;
    const filtroOrdem = ordemAlfabetica(dadosPokemons, ordemEscolhida);
    imprimePokemons(filtroOrdem);
  
  })

const voltarTopo = document.getElementById("voltarTopo");

voltarTopo.addEventListener("click", (e) => {
  window.scrollTo(0, 0);
});

const buscaNome = document.getElementById("filtroBuscar");

buscaNome.addEventListener("keyup", (e) => {
  const nomePreenchido = e.target.value;
  const resultadoBusca = filtrarNome(dadosPokemons, nomePreenchido)
  imprimePokemons(resultadoBusca)
});

const limpaFiltros = document.getElementById("limparFiltros")

limpaFiltros.addEventListener("click", () => imprimePokemons(dadosPokemons));
