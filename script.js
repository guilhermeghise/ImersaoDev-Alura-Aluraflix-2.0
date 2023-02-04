// Desafio 3
// n entendi ver de novo kkkkk


function adicionarFilme() {
    // DOM
    var nomeInput = document.getElementById('seuNome') // input que recebe nome
    var filmeFavorito = document.getElementById('filme').value // input que recebe filme
    var elementoListaFilmes = document.getElementById('listaFilmes') // div da lista filmes
    var trailerFilme = document.getElementById('trailer').value;

 // verificar se o nome do usuário já foi impresso
    if (!elementoListaFilmes.innerHTML.includes(nomeInput.value)) {
        elementoListaFilmes.innerHTML = (`Bem vindo, ${nomeInput.value}!`) + '</br></br>' +  elementoListaFilmes.innerHTML; 
    }


    // adicionar capa dos filmes e trailer ao clicar na imagem 
      elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML+'<a href=' + trailerFilme + ' target=_blank>' +'<img src='+filmeFavorito+'>';



    document.getElementById('filme').value = ''
    document.getElementById('trailer').value = ''

} 


