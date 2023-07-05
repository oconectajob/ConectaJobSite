
var cards = [

    {
      titulo: "Desenvolvedor Web",
      logo: "../images/76d29443-c412-4e2c-b869-324887e7de81.png",
      requisitos: "Experiência em HTML, CSS e JavaScript. Conhecimento em frameworks como React ou Angular é desejável.",
      dataCandidatura: "31 de julho de 2023",
      curriculo: "Envie seu currículo para desenvolvedorweb@empresa.com",
      observacao: "Observações adicionais sobre a vaga de desenvolvedor web."
    },
    {
      titulo: "Analista de Marketing Digital",
      logo: "../images/76d29443-c412-4e2c-b869-324887e7de81.png",
      requisitos: "Conhecimento em estratégias de SEO, gestão de campanhas de mídia online e análise de métricas. Experiência anterior na área de marketing digital.",
      dataCandidatura: "15 de agosto de 2023",
      curriculo: "Envie seu currículo para analistamarketing@empresa.com",
      observacao: "Observações adicionais sobre a vaga de analista de marketing digital."
    },
    {
      titulo: "Designer Gráfico",
      logo: "../images/76d29443-c412-4e2c-b869-324887e7de81.png",
      requisitos: "Domínio de ferramentas como Adobe Photoshop e Illustrator. Experiência na criação de materiais impressos e digitais.",
      dataCandidatura: "10 de agosto de 2023",
      curriculo: "Envie seu currículo para designergrafico@empresa.com",
      observacao: "Observações adicionais sobre a vaga de designer gráfico."
    },
    {
      titulo: "Engenheiro de Software",
      logo: "../images/76d29443-c412-4e2c-b869-324887e7de81.png",
      requisitos: "Experiência em desenvolvimento de software, conhecimento em linguagens como Java, C++ ou Python. Graduação em Engenharia de Software ou áreas relacionadas.",
      dataCandidatura: "25 de julho de 2023",
      curriculo: "Envie seu currículo para engenheirosoftware@empresa.com",
      observacao: "Observações adicionais sobre a vaga de engenheiro de software."
    },
    {
      titulo: "Assistente Administrativo",
      logo: "../images/76d29443-c412-4e2c-b869-324887e7de81.png",
      requisitos: "Conhecimento em rotinas administrativas, domínio do pacote Office e boa comunicação escrita e verbal.",
      dataCandidatura: "5 de agosto de 2023",
      curriculo: "Envie seu currículo para assistenteadministrativo@empresa.com",
      observacao: "Observações adicionais sobre a vaga de assistente administrativo."
    },
    {
      titulo: "Analista Financeiro",
      logo: "../images/76d29443-c412-4e2c-b869-324887e7de81.png",
      requisitos: "Experiência em análise financeira, conhecimento em planilhas e sistemas financeiros. Formação em Ciências Contábeis ou áreas relacionadas.",
      dataCandidatura: "20 de julho de 2023",
      curriculo: "Envie seu currículo para analistafinanceiro@empresa.com",
      observacao: "Observações adicionais sobre a vaga de analista financeiro."
    },
    {
      titulo: "Gerente de Projetos",
      logo: "../images/76d29443-c412-4e2c-b869-324887e7de81.png",
      requisitos: "Experiência em gerenciamento de projetos, conhecimento em metodologias ágeis e habilidades de liderança.",
      dataCandidatura: "10 de agosto de 2023",
      curriculo: "Envie seu currículo para gerenteprojetos@empresa.com",
      observacao: "Observações adicionais sobre a vaga de gerente de projetos."
    },
    {
      titulo: "Assistente de Recursos Humanos",
      logo: "../images/76d29443-c412-4e2c-b869-324887e7de81.png",
      requisitos: "Conhecimento em rotinas de RH, habilidades organizacionais e boa comunicação. Formação em Psicologia, Administração ou áreas relacionadas.",
      dataCandidatura: "1 de agosto de 2023",
      curriculo: "Envie seu currículo para assistenterh@empresa.com",
      observacao: "Observações adicionais sobre a vaga de assistente de recursos humanos."
    },
    {
      titulo: "Técnico de Suporte",
      logo: "../images/76d29443-c412-4e2c-b869-324887e7de81.png",
      requisitos: "Conhecimento em suporte técnico, habilidades de resolução de problemas e bom relacionamento interpessoal.",
      dataCandidatura: "15 de julho de 2023",
      curriculo: "Envie seu currículo para tecnicosuporte@empresa.com",
      observacao: "Observações adicionais sobre a vaga de técnico de suporte."
    },
    {
      titulo: "Estagiário de Marketing",
      logo: "../images/76d29443-c412-4e2c-b869-324887e7de81.png",
      requisitos: "Cursando Marketing ou áreas relacionadas, interesse em aprender sobre estratégias de marketing digital.",
      dataCandidatura: "30 de julho de 2023",
      curriculo: "Envie seu currículo para estagiomarketing@empresa.com",
      observacao: "Observações adicionais sobre a vaga de estagiário de marketing."
    }
    
  ];
  
  function createCard(card) {
    var cardElement = document.createElement("div");
    cardElement.classList.add("card");
  
    var cardElement = document.createElement("div");
    cardElement.classList.add("card");

    var esquerdaElement = document.createElement("div");
    esquerdaElement.classList.add("esquerda");

    var logoElement = document.createElement("div");
    logoElement.classList.add("card-logo");
    var logoImage = document.createElement("img");
    logoImage.src = card.logo;
    logoImage.alt = "Logo da Empresa";
    logoElement.appendChild(logoImage);
    esquerdaElement.appendChild(logoElement);

    var titleElement = document.createElement("h2");
    titleElement.textContent = card.titulo;
    esquerdaElement.appendChild(titleElement);

    var direitaElement = document.createElement("div");
    direitaElement.classList.add("direita");

    var contentElement = document.createElement("div");
    contentElement.classList.add("card-content");

    var requirementsSection = document.createElement("div");
    requirementsSection.classList.add("section");
    var requirementsTitle = document.createElement("h3");
    requirementsTitle.textContent = "Requisitos";
    var requirementsText = document.createElement("p");
    requirementsText.textContent = card.requisitos;
    requirementsSection.appendChild(requirementsTitle);
    requirementsSection.appendChild(requirementsText);

    var applicationDateSection = document.createElement("div");
    applicationDateSection.classList.add("section");
    var applicationDateTitle = document.createElement("h3");
    applicationDateTitle.textContent = "Data de Candidatura";
    var applicationDateText = document.createElement("p");
    applicationDateText.textContent = card.dataCandidatura;
    applicationDateSection.appendChild(applicationDateTitle);
    applicationDateSection.appendChild(applicationDateText);

    var curriculumSection = document.createElement("div");
    curriculumSection.classList.add("section");
    var curriculumTitle = document.createElement("h3");
    curriculumTitle.textContent = "Currículo";
    var curriculumText = document.createElement("p");
    curriculumText.textContent = card.curriculo;
    curriculumSection.appendChild(curriculumTitle);
    curriculumSection.appendChild(curriculumText);

    var observationSection = document.createElement("div");
    observationSection.classList.add("section");
    var observationTitle = document.createElement("h3");
    observationTitle.textContent = "Observação";
    var observationText = document.createElement("p");
    observationText.textContent = card.observacao;
    observationSection.appendChild(observationTitle);
    observationSection.appendChild(observationText);

    contentElement.appendChild(requirementsSection);
    contentElement.appendChild(applicationDateSection);
    contentElement.appendChild(curriculumSection);
    contentElement.appendChild(observationSection);

    direitaElement.appendChild(contentElement);

    cardElement.appendChild(esquerdaElement);
    cardElement.appendChild(direitaElement);
  
    return cardElement;
  }
  
  function renderCards(cardsArray) {
    var resultsContainer = document.getElementById("results-container");
    resultsContainer.innerHTML = "";
  
    cardsArray.forEach(function(card) {
      var cardElement = createCard(card);
      resultsContainer.appendChild(cardElement);
    });
  }
  
  function searchCards() {
    var searchInput = document.getElementById("search-input");
    var searchTerm = searchInput.value.toLowerCase();
  
    var filteredCards = cards.filter(function(card) {
      return card.titulo.toLowerCase().includes(searchTerm);
    });
  
    renderCards(filteredCards);
  }
  
  
  var searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", searchCards);
  

  renderCards(cards);
  