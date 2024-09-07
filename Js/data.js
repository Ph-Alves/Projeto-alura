let personagens = [
    {
        nome: "Astarion",
        raça: "Elfo Drow",
        classe: "Ladino",
        descricao: "Astarion é um Ladino Alto Elfo que vagou pela noite como um filhote de vampiro por séculos, servindo a um mestre sádico até ser arrebatado. Agora ele pode caminhar na luz, mas será que ele consegue deixar seu passado perverso para trás?",
        tag: "astarion, ladino, companheiro, aliado",
        imagem: "../Img/astarion.jpg"
    },
    {
        nome: "Gale",
        raça: "Humano",
        classe: "Feiticeiro",
        descricao: "Um Feiticeiro Humano, e Nobre por nascimento, Gale tem uma ambição: se tornar o maior feiticeiro que Faerûn já conheceu. No entanto, sua sede por magia levou ao desastre. Uma Esfera de Destruição Netherese bate em seu peito, contando os segundos para uma explosão que pode nivelar uma cidade. Gale está confiante de que superará isso, mas o tempo não está a seu lado.",
        tag: "gale, feiticeiro, companheiro, magico",
        imagem: "../Img/Gale.jpg"
    },
    {
        nome: "Lae'zel",
        raça: "Githyanki",
        classe: "Guerreira",
        descricao: "Uma Lutadora consumada, feroz mesmo pelos padrões de uma creche Githyanki, Lae'zel enfrentou a transformação em um monstro que ela jurou destruir. Lae'zel deve provar seu valor para se reunir ao seu povo - se eles não a executarem primeiro.",
        tag: "laezel, guerreira, companheira, githyanki",
        imagem: "../Img/laeZel.jpg"
    },
    {
        nome: "Shadowheart",
        raça: "Meio-elfa",
        classe: "Clériga",
        descricao: "Uma Clériga de Domínio de Trapaça Meio-Elfa Alta e uma das discípulas obscuras de Shar, Shadowheart foi enviada em uma missão suicida para roubar um item de grande poder. Enquanto luta com sua fé e magia estranha e selvagem, Shadowheart tem inimigos em todos os lados - e um segredo há muito enterrado para descobrir.",
        tag: "shadowheart, cleriga, companheira, meio-elfa",
        imagem: "../Img/shadowHeart.jpg"
    },
    {
        nome: "Wyll",
        raça: "Humano",
        classe: "Bruxo",
        descricao: "Um Warlock Humano e Nobre por nascimento, Wyll fez seu nome como o heroico 'Lâmina das Fronteiras'. Ele mantém seu pacto com um diabo bem escondido e está desesperado para escapar do acordo infernal - mesmo que isso signifique resgatar a criatura sedutora que fez o acordo.",
        tag: "wyll, paladino, companheiro, humano",
        imagem: "../Img/wyll.jpg"
    },
    {
        nome: "Minsc",
        raça: "Humano",
        classe: "Caçador",
        descricao: "Um ranger experiente e companheiro inseparável de sua hiena gigante, Boo. Minsc é um homem simples, mas com um coração puro e uma paixão pela natureza.",
        tag: "minsc, ranger, companheiro, boo",
        imagem: "../Img/minsc.jpg"
    },
    {
        nome: "Karlach",
        raça: "Tiefling",
        classe: "Bárbara",
        descricao: "Uma Tiefling Zariel, outrora cometeu atos terríveis sob o domínio de um poderoso Arquidiabo. Esta Bárbara tem uma Máquina Infernal por um coração que mantém seu corpo queimando em vermelho-vivo. Recentemente libertada das garras de seu mestre, ela busca vingança contra aqueles que a venderam ao diabo.",
        tag: "karlach, barbara, companheira, tiefling",
        imagem: "../Img/karlach.png"
    },
    {
        nome: "Halsin",
        raça: "Elfo",
        classe: "Druida",
        descricao: "Um druida poderoso e conhecedor profundo da natureza. Halsin é um aliado valioso para qualquer grupo.",
        tag: "halsin, druida, companheiro, natureza",
        imagem: "../Img/halsin.jpg"
    },
    {
        nome: "Jaheira",
        raça: "Meio-elfa",
        classe: "Druida",
        descricao: "Uma meio-elfa druida experiente, conhecida por sua sabedoria e força. Jaheira é uma veterana dos Reinos Esquecidos e traz consigo uma riqueza de conhecimento.",
        tag: "jaheira, druida, companheira, veterana",
        imagem: "../Img/jaheira.jpg"
    }
];

let inimigos = [
    {
        nome: "Alma Pura Gut",
        raça: "goblin",
        descricao: "Alma pura Gut é um NPC e um potencial Boss em Baldur's Gate 3 (BG3). Gut pode ser encontrado no Santuário Despedaçado. True Soul Gut é uma velha mulher goblin e a alta sacerdotisa do Absoluto. Bosses em BG3 são inimigos poderosos que têm saúde aumentada e representam um desafio maior para os jogadores.",
        habilidades: ["Raio Guia", "Proteção Absoluta", "Imagem Espelhada", "Mãos Ardientes", "Esmagar", "Visão norturna", "ataque de oportunidade"],
        fraquezas: ["nenhuma"],
        resistencias: ["nenhuma"],
        imagem: "../Img/gut.jpg"
    },
    {
        nome: "Minthara",
        raça: "Drow Jurados a Lolth",
        descricao: "Um boss opcional do acampamento goblin, Minthara é um dos 3 líderes do acampamento goblin, ela possui um exército pronto para ir para o acampamento esmeralda massacrar todos os druidas, é possível chamar ela para sua equipe dependendo dos seus objetivos.",
        habilidades: ["benção", "Imagem espelhada", "Raio Guia", "Curar feridas"],
        fraquezas: ["nenhuma"],
        resistencias: ["nenhuma"],
        imagem: "../Img/minthara.jpg"
    },
    {
        nome: "Dror Ragzlin",
        raça: "Hobgoblin",
        descricao: "Um general poderoso e possível boss, ele tentará se aproximar de todas as formas, a fim de usar seu dano destrutivo na sua equipe, tome cuidado. Dror é um dos 3 líderes.",
        habilidades: ["Aura de liderança", "ataque de oportunidade"],
        fraquezas: ["nenhuma"],
        resistencias: ["nenhuma"],
        imagem: "../Img/Dror.png"
    },
    {
        nome: "Tia Ethel",
        raça: "fada",
        descricao: "Aparecendo primeiramente como uma tia inocente, ela na verdade é uma bruxa, e complicada de se enfrentar, você terá de passar por diversos pedaços de história até poder enfrentar ela de verdade.",
        habilidades: ["Diversas habilidades de mago,druida e clérigo."],
        fraquezas: ["nenhuma"],
        resistencias: ["nenhuma"],
        imagem: "../Img/tiaEthel.jpg"
    },
    {
        nome: "Alma pura Nere",
        raça: "Drow Jurados a Lolth",
        descricao: "Encontrado atrás de escombros dentro da forja no ato 1, ao liberar os escombros, ele aparecerá, sendo um seguidor da absoluta, é um boss opcional.",
        habilidades: ["ataque de oportunidade"],
        fraquezas: ["nenhuma"],
        resistencias: ["nenhuma"],
        imagem: "../Img/nere.jpeg"
    },
    {
        nome: "GRYM",
        raça: "Constructo",
        descricao: "Um constructo criado para proteger a forja de adamantina, é um boss que aparece ao tentar forjar um item na forja, ele é imune a tudo, exceto quando estiver passando pela lava por ficar superaquecido.",
        habilidades: ["terremoto", "esmagar"],
        fraquezas: ["nenhuma"],
        resistencias: ["todas"],
        imagem: "../Img/grym.jpg"
    },
    {
        nome: "Espectador",
        raça: "Aberração",
        descricao: "Um conjurador poderoso, capaz de incapacitar ou amedrontar alguns membros da equipe, ao enfrentar ele no subterrâneo, ele invocará drows apedrejados para lutar.",
        habilidades: ["morder", "raio de medo", "raio paralizante", "raio feridor"],
        fraquezas: ["nenhuma"],
        resistencias: ["nenhuma"],
        imagem: "../Img/spectator.jpg"
    }
];

let npcsDialogaveis = [
    {
        nome: "Zevlor",
        raça: "Tiefling",
        descricao: "Zevlor é o lider dos Tieflings refugiados, Zevlor te ajudará a lidar com os goblins atacando o santuário e além disso te pedirá para ajudar os refugiados que estão sendo expulsos",
        localizacao: "Santuário esmeralda",
        questões: ["Salve os refugiados"],
        imagem: "../Img/zevlor.jpg"
    },
    {
        nome: "Grão Duke Ravengard",
        raça: "Humano",
        descricao: "Um nobre conselheiro, que por influência mental se aliou aos illithids, você poderá salvá-lo ao longo da história.",
        localizacao: "Castelo de Baldur's Gate",
        questões: ["Investigar a corrupção em Baldur's Gate"],
        imagem: "../Img/ravengard.jpg"
    },
    {
        nome: "Barcus Wroot",
        raça: "Gnomo",
        descricao: "Um comerciante que frequentemente é sequestrado, é um futuro comerciante que entrará no seu acampamento caso você ajude ele todas as vezes.",
        localizacao: "Vilarejo arruinado",
        questões: ["ajude o gnomo"],
        imagem: "../Img/barcus.jpg"
    },
    {
        nome: "Withers",
        raça: "Esqueleto",
        descricao: "Um antigo esqueleto com conhecimento sobre a história da Costa da Espada. Guiado pelo destino de seu Deus, ele conseguirá te ajudar invocando mercenários e revivendo sua equipe caso alguém morra, por uma quantia em ouro.",
        localizacao: "Ruínas antigas",
        questões: ["Explore as ruinas"],
        imagem: "../Img/withers.jpg"
    },
    {
        nome: "Volo",
        raça: "Humano",
        descricao: "Um bardo charlatão com histórias incríveis (e duvidosas) para contar.",
        localizacao: "Santuário esmeralda",
        questões: ["Salve Volo"],
        imagem: "../Img/volo.jpg"
    },
    {
        nome: "Raphael",
        raça: "meio-demônio",
        descricao: "Um meio-demônio manipulador que busca poder e prazer.",
        localizacao: "pontos específicos do ato 1",
        questões: ["Remova o parasita"],
        imagem: "../Img/raphael.jpg"
    }
]

let itens = [
    {
        nome: "tocha da revogação",
        modificador: "1d4 + 1d4 de dano necrótico",
        peso: "leve",
        efeitos: ["Dano adicional de 1d4 de dano necrótico"],
        imagem: "../Img/tochaDaRevogação.png"
    },
    {
        nome: "Poção de Cura",
        modificador: "Cura 1d8 pontos de vida.",
        peso: "leve",
        efeitos: ["Cura"],
        imagem: "../Img/pocaoDeCura.png"
    },
    {
        nome: "Adaga de absorção arcana",
        modificador: "1d4 + 1 de dano perfurante",
        peso: "leve",
        efeitos: ["Quando você mata um inimigo com um ataque copo-a-corpo, ganha novamente um slot de level 1 de magia"],
        imagem: "../Img/ArcaneAbsorptionDagger.png"
    },
    {
        nome: "Adaga da Dança Cintilante",
        modificador: "1d4 + 2 de dano perfurante",
        peso: "leve",
        efeitos: ["Esse objeto brilha em até 6m de distância", "Quando esta adaga está na mão não dominante, o portador ganha +1 na classe de armadura"],
        imagem: "../Img/adagaDaDancaCintilante.jpg"
    },
    {
        nome: "Rapsódia",
        modificador: "1d4 + 1 de dano perfurante",
        peso: "leve",
        efeitos: ["ganha +1 em rolagens de ataque, dano e DC de magias para cada inimigo derrotado em um limite de 3.", "Possivelmente inflinge sangramento quando acertar uma criatura enquanto invisível ou segurando esta arma."],
        imagem: "../Img/Rapsódia.png"
    },
    {
        nome: "Stillmaker",
        modificador: "1d4 + 2 de dano perfurante",
        peso: "leve",
        efeitos: ["magia (imobilizar pessoa)"],
        imagem: "../Img/Stillmaker.png"
    }
];