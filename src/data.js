export const ordemAlfabetica = (dadosPokemons, ordemEscolhida) => {
  if (ordemEscolhida === "AZ") {
    return dadosPokemons.sort((a, b) => (a.name > b.name ? 1 : -1))
  } 
    else {
    return dadosPokemons.sort((a, b) => (a.name > b.name ? -1 : 1))
  }
};

export const filtrarNome = (dadosPokemons, name) => {
  return dadosPokemons.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(name.toLowerCase())
  });
}

export const calcularPorcentagem = (total, raridadeEscolhida) => {
  const porcentagem = Math.round((raridadeEscolhida * 100) / total).toFixed(2);
  return porcentagem;
};