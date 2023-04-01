let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");

btnBuscarFilme.onclick = async () => {
    if(inputBuscarFilme.value.length > 0){
        let filmes = new Array();
        fetch("http://www.omdbapi.com/?apikey=4f0f789b&s="+inputBuscarFilme.value, {mode:"cors"})
        .then((resp)=> resp.json())
        .then((resp)=> {
            resp.Search.forEach((item) => {
                let filme=new Filme(
                    item.imdbID,
                    item.Title,
                    item.Year,
                    null,
                    null,
                    item.Poster,
                    null,
                    null,
                    null,
                    null,
                    null,
                );
                filmes.push(filme);
            });
            listarFilmes(filmes);
    });
}

let detalhesFilme = async(id)=>{
    fetch("http://www.omdbapi.com/?apikey=4f0f789b&i="+id)
    .then((resp)=> resp.json())
    .then((resp)=>{
      console.log(resp);
      let filme = new Filme(
        resp.imdbID,
        resp.Title,
        resp.Year,
        resp.Genre.split(","),
        resp.Runtime,
        resp.Poster,
        resp.Plot,
        resp.Director,
        resp.Actors.split(","),
        resp.Awards,
        resp.imdbRating
      )
         
      document.querySelector("#lista-filmes").innerHTML="";
      document.querySelector("#mostrar-filme").innerHTML="";
      console.log(filme.getDetalhesFilme());
     document.querySelector("#lista-filmes").appendChild(filme.getDetalhesFilme());
  
     document.querySelector("#btnFechar").onclick=()=>{
      listarFilmes(filme);
     }
    document.querySelector("#btnSalvar").onclick = () => {
      let filmes = new Array();
      let filmesString = localStorage.getItem('filmesFavoritos');
      if (filmesString) {
        filmes = JSON.parse(filmesString);
      }
    
      if (filmes && filmes.some(filmeVall => filmeVall.id === filme.id)) {
        alert("Filme salvo.");
        return;
      }
      
      filmes.push(filme);
      filmes = JSON.stringify(filmes);
      localStorage.setItem("filmesFavoritos", filmes);
    };
    document.querySelector("#btnDesfa").onclick = () =>{
      let filmesFavoritos = JSON.parse(localStorage.getItem('filmesFavoritos'));  
  
      filmesFavoritos = filmesFavoritos.filter(pegaId => pegaId.id!==filme.id);
  
      localStorage.setItem('filmesFavoritos',JSON.stringify(filmesFavoritos));
      listarFavoritos();
  }
    });
  }


let listarFilmes = async (filmes) => {
    let listaFilmes = await document.querySelector("#lista-filmes");
    listaFilmes.style.display = "flex";
    listaFilmes.innerHTML = "";
    document.querySelector("#mostrar-filme").innerHTML="";
    document.querySelector("#mostrar-filme").style.display = "none";
    if(filmes.length > 0) {
        filmes.forEach(async(filme) => {
            console.log(filme);
            listaFilmes.appendChild(await filme.getCard());
            filme.getBtnDetalhes().onclick=()=>{
                detalhesFilme(filme.id);
            }

        });
    }
}

let navFavoritos = document.querySelector("#nav-favoritos");
  let listarFavoritos=()=>{
     let filmesFavoritos=localStorage.getItem("filmesFavoritos");
    filmesFavoritos=JSON.parse(filmesFavoritos);

    let filmes = new Array();

    filmesFavoritos.forEach((item)=>{
      let filme = new Filme(
        item.id,
        item.titulo,
        item.ano,
        null,
        item.duracao,
        item.cartaz,
        null,
        null,
        null,
        item.avaliacao
      );
      filmes.push(filme)

    })
    listarFilmes(filmes);
  }
  navFavoritos.onclick=()=>{
   listarFavoritos();
  }
}
