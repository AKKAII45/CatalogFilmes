class Filme
{
    constructor(id, titulo, ano, genero, duracao, cartaz, sinopse, direcao, elenco, classificacao, avaliacao){
        this.id=id;
        this.titulo=titulo;
        this.ano=ano;
        this.genero=genero;
        this.duracao=duracao;
        this.cartaz=cartaz;
        this.sinopse=sinopse;
        this.direcao=direcao;
        this.elenco=elenco;
        this.classificacao=classificacao;
        this.avaliacao=avaliacao;
        this.btnDetalhes=null;
    }
    getCard = async () => {
    let card = document.createElement("div");
    card.setAttribute("class","card");
    let imgCartaz = document.createElement("img");
    imgCartaz.setAttribute("class","card-img-top");
    imgCartaz.setAttribute("src",this.cartaz);
    let cardBody = document.createElement("div");
    cardBody.setAttribute("class","card-body");
    let hCardTitle=document.createElement("h5");
    hCardTitle.setAttribute("class","card-title");
    let divDetalhes = document.createElement("div");
    divDetalhes.setAttribute("style","display:flex justify-content:space-around;");
    let divGenero = document.createElement("div");
    divGenero.setAttribute("style","flex-grow:1;");
    let divAnoProducao = document.createElement("div");
    divAnoProducao.setAttribute("style","flex-grow:1;");
    let divClassificacao = document.createElement("div");
    divClassificacao.setAttribute("style","flex-grow:1;");
    hCardTitle.appendChild(document.createTextNode(this.titulo));
    divGenero.appendChild(document.createTextNode(this.genero));
    divAnoProducao.appendChild(document.createTextNode(this.ano));
    divClassificacao.appendChild(document.createTextNode(this.classificacao));
    divDetalhes.appendChild(divGenero);
    divDetalhes.appendChild(divAnoProducao);    
    divDetalhes.appendChild(divClassificacao);
    card.appendChild(imgCartaz);
    card.appendChild(cardBody);
    cardBody.appendChild(hCardTitle);
    cardBody.appendChild(divDetalhes);

    this.setBtnDetalhes();
    cardBody.appendChild(this.getBtnDetalhes());
    
    return card;
}

setBtnDetalhes = () => {
    this.btnDetalhes = document.createElement('button');
    this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
    this.btnDetalhes.setAttribute("id",this.id);
    this.btnDetalhes.setAttribute("class", "btnDetalhesFilme");
}

getBtnDetalhes = () => {
    return this.btnDetalhes;
}

getDetalhesFilme = () =>{ 
    let divFilmes = document.querySelector("#lista-filmes");
    divFilmes.innerHTML = "";
    let card = document.createElement("div");
    card.setAttribute("class","card2");
    card.setAttribute("style","width: 50%; display:flex; margin: 0 30%; align-items: center; justify-content: center; background-color: transparent; border:none");
    let imgCartaz = document.createElement("img");
    imgCartaz.setAttribute("class","card-img-top");
    imgCartaz.setAttribute("src", this.cartaz);
    imgCartaz.setAttribute("style", "width: 1200px; height: 1200px;");
    let cardBody = document.createElement("div");
    cardBody.setAttribute("class","card-body2");
    cardBody.setAttribute("style", "width: 2200px;  margin-top: 30px");
    let hCardTitle = document.createElement("h5");
    hCardTitle.setAttribute("class","hCardTitle");
    hCardTitle.setAttribute("style","color:#000;  text-shadow: -1px -1px 0px #FFF,-1px 1px 0px #FFF,1px -1px 0px #FFF,1px 0px 0px #FFF;");
    let divDetalhes = document.createElement("div");
    let divGenero = document.createElement("div");
    divGenero.setAttribute("style","flex-grow: 1;");
    divGenero.setAttribute("style","margin-top: 10px; color: #000; ");
    let divDuracao = document.createElement("div");
    divDuracao.setAttribute("style","flex-grow: 1;");
    divDuracao.setAttribute("style","margin-top: 10px; color: #000;");
    let divAnoProducao = document.createElement("div");
    divAnoProducao.setAttribute("style","flex-grow: 1;");
    divAnoProducao.setAttribute("style","margin-top: 10px; color: #000;");
    let divClassificacao = document.createElement("div");
    divClassificacao.setAttribute("style","flex-grow: 1;");
    divClassificacao.setAttribute("style","margin-top: 10px; color: #000;");
    let divDiretores = document.createElement("div");
    divDiretores.setAttribute("style","flex-grow: 1;");
    divDiretores.setAttribute("style","margin-top: 10px; color: #000;");
    let divAtores = document.createElement("div");
    divAtores.setAttribute("style","flex-grow: 1;");
    divAtores.setAttribute("style","margin-top: 10px; color: #000;");
    hCardTitle.appendChild(document.createTextNode(`"${this.titulo}"`));
    divGenero.appendChild(document.createTextNode(`Gênero: ${this.genero}`));
    divDuracao.appendChild(document.createTextNode(`Duração: ${this.duracao}`));
    divAnoProducao.appendChild(document.createTextNode(`Ano: ${this.ano}`));
    divDiretores.appendChild(document.createTextNode(`Direção: ${this.direcao}`));
    divAtores.appendChild(document.createTextNode(`Elenco: ${this.elenco}`));
    divClassificacao.appendChild(document.createTextNode(this.classificacao));
    divDetalhes.appendChild(divGenero);
    divDetalhes.appendChild(divDuracao);
    divDetalhes.appendChild(divAnoProducao);
    divDetalhes.appendChild(divDiretores);
    divDetalhes.appendChild(divAtores);
    divDetalhes.appendChild(divClassificacao);
    card.appendChild(imgCartaz);
    card.appendChild(cardBody);
    cardBody.appendChild(hCardTitle);
    cardBody.appendChild(divDetalhes);
    let btnSalvar = document.createElement('button');
    btnSalvar.appendChild(document.createTextNode('Salvar'));
    btnSalvar.setAttribute('id','btnSalvar');
    btnSalvar.setAttribute('style','width: 70px; height: 30px; margin-right: 10px; margin-top: 20px; background-color #fff;');
    divDetalhes.appendChild(btnSalvar);

    let btnFechar = document.createElement('button');
    btnFechar.appendChild(document.createTextNode('Fechar'));
    btnFechar.setAttribute('id','btnFechar');
    btnFechar.setAttribute('style','width: 70px; height: 30px; margin-top: 20px; background-color #fff;');
    divDetalhes.appendChild(btnFechar);

    let btnDesfavoritar = document.createElement('button');
    btnDesfavoritar.appendChild(document.createTextNode('Desfavoritar'));
    btnDesfavoritar.setAttribute('id','btnDesfavoritar');
    btnDesfavoritar.setAttribute('style','width: 100px; height: 30px; margin-top: 20px; background-color #fff;');
    divDetalhes.appendChild(btnDesfavoritar);

    return card;

}
}