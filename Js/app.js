function pesquisar(){
    let section = document.getElementById("resultado-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p> Nada foi encontrado. Você precisa digitar um personagem ou monstro.</p>";
        return;
    };

    campoPesquisa = campoPesquisa.toLowerCase();

    /* variáveis da lista de personagens */ 
    let nome = "";
    let raca = "";
    let classe = "";
    let descricao = "";
    let tags = "";
    let imagem = "";

    /* variáveis da lista de inimigos */ 
    let nomeInimigo = "";
    let tipoInimigo = "";
    let descricaoInimigo = "";
    let habilidadesInimigo = "";
    let fraquezasInimigo = "";
    let resistenciasInimigo = "";
    let imagemInimigo = "";

    /* variáveis da lista de npcs */ 
    let nomeNPC = "";
    let racaNPC = "";
    let descricaoNPC = "";
    let localizacaoNPC = "";
    let questoesNPC = "";
    let imagemNPC = "";

    /* variáveis da lista de itens */ 
    let nomeItem = "";
    let modificadorItem = "";
    let pesoItem = "";
    let efeitosItem = "";
    let imagemItem = "";

    let resultados = "";

    for (let i of personagens) {
        nome = i.nome.toLowerCase();
        raca = i.raça.toLowerCase();
        classe = i.classe.toLowerCase();
        descricao = i.descricao.toLowerCase();
        tags = i.tag.toLowerCase();
        imagem = i.imagem;

        if (nome.includes(campoPesquisa) || raca.includes(campoPesquisa) || classe.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="descricao-pesquisa"> 
                <h3 class="personagem">${i.nome}</h3> 
                <p class="descricao-personagem"> 
                <strong>Raça:</strong> ${i.raça} <br> 
                <strong>Classe:</strong> ${i.classe} <br> 
                <strong>Descrição:</strong> ${i.descricao} </p> 
            </div> 
            <img src=${i.imagem} alt="Imagem-Personagem" class="imagem-personagem"></img> 
            `
        }

        section.innerHTML = resultados;
    }

    for (let i of inimigos) {
        nomeInimigo = i.nome.toLowerCase();
        racaInimigo = i.raça.toLowerCase();
        descricaoInimigo = i.descricao.toLowerCase();
        habilidadesInimigo = i.habilidades;
        fraquezasInimigo = i.fraquezas;
        resistenciasInimigo = i.resistencias;
        imagemInimigo = i.imagem;

        if (nomeInimigo.includes(campoPesquisa) || racaInimigo.includes(campoPesquisa) || descricaoInimigo.includes(campoPesquisa)) {
            resultados += `
            <div class="descricao-pesquisa"> 
                <h3 class="personagem">${i.nome}</h3> 
                <p class="descricao-personagem"> 
                <strong>Raça:</strong> ${i.raça} <br> 
                <strong>Habilidades:</strong> ${i.habilidades} <br> 
                <strong>Fraquezas:</strong> ${i.fraquezas} <br>
                <strong>Resistências:</strong> ${i.resistencias} <br>
                <strong>Descrição:</strong> ${i.descricao} </p> 
            </div> 
            <img src=${i.imagem} alt="Imagem-Inimigo" class="imagem-personagem"></img> 
            `
        }

        section.innerHTML = resultados;
    }

    for (let i of npcsDialogaveis) {
        nomeNPC = i.nome.toLowerCase();
        racaNPC = i.raça.toLowerCase();
        descricaoNPC = i.descricao.toLowerCase();
        localizacaoNPC = i.localizacao.toLowerCase();
        questoesNPC = i.questões;
        imagemNPC = i.imagem;

        if (nomeNPC.includes(campoPesquisa) || racaNPC.includes(campoPesquisa) || descricaoNPC.includes(campoPesquisa)) {
            resultados += `
            <div class="descricao-pesquisa"> 
                <h3 class="personagem">${i.nome}</h3> 
                <p class="descricao-personagem"> 
                <strong>Raça:</strong> ${i.raça} <br> 
                <strong>localização:</strong> ${i.localizacao} <br> 
                <strong>questões:</strong> ${i.questões} <br>
                <strong>Descrição:</strong> ${i.descricao} </p> 
            </div> 
            <img src=${i.imagem} alt="Imagem-Npc" class="imagem-personagem"></img> 
            `
        }

        section.innerHTML = resultados;
    }

    for (let i of itens) {
        nomeItem = i.nome.toLowerCase();
        modificadorItem = i.modificador.toLowerCase();
        pesoItem = i.peso.toLowerCase();
        efeitosItem = i.efeitos;
        imagemItem = i.imagem;

        if (nomeItem.includes(campoPesquisa)) {
            resultados += `
            <div class="descricao-pesquisa"> 
                <h3 class="personagem">${i.nome}</h3> 
                <p class="descricao-personagem"> 
                <strong>Modificador:</strong> ${i.modificador} <br> 
                <strong>Peso:</strong> ${i.peso} <br> 
                <strong>Efeito:</strong> ${i.efeitos} <br> </p> 
            </div> 
            <img src=${i.imagem} alt="Imagem-Item" class="imagem-personagem"></img> 
            `
        }

        section.innerHTML = resultados;
    }
}