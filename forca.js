let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [
    palavra001 = {
        nome: "EDUCAÇAO",
        categoria:"ÉTNICO RACIAL"
    },
    palavra002 = {
        nome: "EMPATIA",
        categoria:"ÉTNICO RACIAL"
    },
    palavra003 = {
        nome: "TOLERANCIA",
        categoria:"ÉTNICO RACIAL"
    },
    palavra004 = {
        nome: "DIALOGO",
        categoria:"ÉTNICO RACIAL"
    },
    palavra005 = {
        nome: "RESPEITO",
        categoria:"ÉTNICO RACIAL"
    },
    palavra006 = {
        nome: "IGUALDADE",
        categoria:"ÉTNICO RACIAL"
    },
    palavra007 = {
        nome: "SENSIBILIZACAO",
        categoria:"ÉTNICO RACIAL"
    },
    palavra008 = {
        nome: "JUSTICA",
        categoria:"ÉTNICO RACIAL"
    },
    palavra009 = {
        nome: "ACAO",
        categoria:"ÉTNICO RACIAL"
    },
    palavra010 = {
        nome: "SOLIDARIEDADE",
        categoria:"ÉTNICO RACIAL"
    },
    palavra011 = {
        nome: "INCLUSAO",
        categoria:"ÉTNICO RACIAL"
    },
    palavra012 = {
        nome: "DIVERSIDADE",
        categoria:"ÉTNICO RACIAL"
    },
    palavra013 = {
        nome: "EQUIDADE",
        categoria:"ÉTNICO RACIAL"
    },
    palavra014 = {
        nome: "CIDADANIA",
        categoria:"ÉTNICO RACIAL"
    },
    palavra015 = {
        nome: "DIREITOS",
        categoria:"ÉTNICO RACIAL"
    },
    palavra016 = {
        nome: "CONCIENCIA",
        categoria:"ÉTNICO RACIAL"
    },
    palavra017 = {
        nome: "DENUNCIA",
        categoria:"ÉTNICO RACIAL"
    },
    palavra018 = {
        nome: "COMPREENSAO",
        categoria:"ÉTNICO RACIAL"
    },
    palavra019 = {
        nome: "ALIANCA",
        categoria:"ÉTNICO RACIAL"
    },
    palavra020 = {
        nome: "OPORTUNIDADES",
        categoria:"ÉTNICO RACIAL"
    },
    palavra021 = {
        nome: "CAMPANHAS",
        categoria:"ÉTNICO RACIAL"
    },
    palavra022 = {
        nome: "MOBILIZACAO",
        categoria:"ÉTNICO RACIAL"
    },
    palavra023 = {
        nome: "RECONHECIMENTO",
        categoria:"ÉTNICO RACIAL"
    },
    palavra024 = {
        nome: "COMBATE",
        categoria:"ÉTNICO RACIAL"
    },
    palavra025 = {
        nome: "DIVERSIDADE",
        categoria:"ÉTNICO RACIAL"
    },
    palavra026 = {
        nome: "PROMOÇAO",
        categoria:"ÉTNICO RACIAL"
    },
    palavra027 = {
        nome: "CULTURA",
        categoria:"ÉTNICO RACIAL"
    },
    palavra028 = {
        nome: "MUDANCA",
        categoria:"ÉTNICO RACIAL"
    },
    palavra029 = {
        nome: "HARMONIA",
        categoria:"ÉTNICO RACIAL"
    },
    palavra030 = {
        nome: "COLABORAÇAO",
        categoria:"ÉTNICO RACIAL"
    },
    
];


criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
}
montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";
   
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
}

function verificaLetraEscolhida(letra){
    if(tentativas > 0)
    {
        mudarStyleLetra("tecla-" + letra);
        comparalistas(letra);
        montarPalavraNaTela();
    }    
}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#C71585";
    document.getElementById(tecla).style.color = "#ffffff";
}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca();
        // verificar se ainda tem tentativas // mensagem
    }
    else{
        for(i = 0; i < palavraSecretaSorteada.length; i++)
        {
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }
    
    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true)
    {
        alert (" VOCÊ VENCEU!")
        //mensagem na tela
        tentativas = 0;
    }

}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background  = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background  = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background  = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background  = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background  = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background  = "url('./img/forca06.png')";
            alert("VOCÊ PERDEU!")
            break;
        default:
            document.getElementById("imagem").style.background  = "url('./img/forca.png')";
            break;
    }
}
const btn =document.querySelector("#refresh")
btn.addEventListener("click",()=>{
location.reload()
})





