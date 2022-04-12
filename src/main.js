//chamar funcoes de calculo filtro e etc
import { ordemAlfabetica, filtrarNome, calcularPorcentagem } from './data.js';

//aqui sera construidos os cards, dados vem desse arquivo
import data from './data/pokemon/pokemon.js';

//console.log(example, data);

//na oh de sexta com o gabs perguntar se é let ou const pois ela se transforma nas funcs do data.js
let dadosPokemons = data.pokemon;

//trazendo todos os cards
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

//filtra/ordena por ordem alfabetica
 const ordemAlfa = document.getElementById("filtroOrdenar"); 

 ordemAlfa.addEventListener("change", (e) => {
    const ordemEscolhida = e.target.value;
    const filtroOrdem = ordemAlfabetica(dadosPokemons, ordemEscolhida);
    imprimePokemons(filtroOrdem);
  
  })

//volta p/ topo da pagina  
const voltarTopo = document.getElementById("voltarTopo");

voltarTopo.addEventListener("click", (e) => {
  window.scrollTo(0, 0);
});

//busca por nome pesquisado

const buscaNome = document.getElementById("filtroBuscar");

buscaNome.addEventListener("keyup", (e) => {
  const nomePreenchido = e.target.value;
  const resultadoBusca = filtrarNome(dadosPokemons, nomePreenchido)
  imprimePokemons(resultadoBusca)
});

/*
//calculo por raridade

const porcentagemRaridade = document.getElementById("filtroCalcular"); 

porcentagemRaridade.addEventListener("change", (e) => {
   const raridadeEscolhida = e.target.value;
   const mostraPorcentagens = calcularPorcentagem(dadosPokemons, raridadeEscolhida);
   imprimePokemons(mostraPorcentagens);
 
 })

const percentagem = document.getElementById("resultadoCalculo");

function mostrarPorcentagem(percentagem) {
    percentagem.innerHTML = `Essa é a porcentagem de Pokemons da raridade escolhida ${percentagem}`;
}
*/

//final ---- limpar busca
const limpaFiltros = document.getElementById("limparFiltros")

limpaFiltros.addEventListener("click", () => imprimePokemons(dadosPokemons));
