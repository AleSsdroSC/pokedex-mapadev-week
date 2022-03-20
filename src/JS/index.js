 /* Quando clicar no pokémon da listagem temos que esconder o cartão do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem 
 
 para isso precisamos trabalhar com dois elementos 
 1 - listagem 
 2 - cartão pokémon

 precisamos criar duas variaveis JS para trabalhar com a tela

 vamos precisar trabalhar com evento de click feito pelo usuário da listagem de pokémon

 remover a classe aberto
 ao clicar em um pokemon da listagem pegamos o ID  desse pokémon pra saber qual cartão mostrar
 remover a classe ativa que marca o pokémon selecionado
 adicionar a classe ativo no pokémon selecionado
 */ 
const ListaSelecaoPokemon = document.querySelectorAll(".pokemon")
const PokemonsCard = document.querySelectorAll (".cartao-pokemon")

ListaSelecaoPokemon.forEach(pokemon => {
    pokemon.addEventListener("click", () => {

        const cartaoPokemonAberto = document.querySelector(".aberto")
        cartaoPokemonAberto.classList.remove("aberto")

       const idPokemonSelecionado = pokemon.attributes.id.value

       const idDoCartaoPokemonParaAbrir = "cartao-" + idPokemonSelecionado
       const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add("aberto")

        const PokemonAtivoNalistagem = document.querySelector(".ativo")
        PokemonAtivoNalistagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})