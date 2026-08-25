// Dados Dinâmicos dos Cards
const dadosEsportes = [
    {
      titulo: "Futebol comunidade",
      faixaEtaria: "Todas as idades",
      local: "São Miguel Paulista",
      telefone: "11 99999-9999",
      horario: "6:00 - 16:00",
      categoria: "futebol",
      tema: "laranja"
    },
    {
      titulo: "Vôlei comunidade",
      faixaEtaria: "Jovem e Adulto",
      local: "JD Ângela",
      telefone: "11 99999-9999",
      horario: "6:00 - 16:00",
      categoria: "vôlei",
      tema: "roxo"
    },
    {
      titulo: "Basquete comunidade",
      faixaEtaria: "Crianças e Jovens",
      local: "CD Tiradentes",
      telefone: "11 99999-9999",
      horario: "6:00 - 16:00",
      categoria: "basquete",
      tema: "laranja"
    }
  ];
  
  // Ícones SVG
  const icones = {
    user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
  };
  
  let filtroCategoria = "todos";
  let termoBusca = "";
  
  function renderizarCards() {
    const container = document.getElementById("listaCards");
    if (!container) return;
  
    const dadosFiltrados = dadosEsportes.filter(({ categoria, titulo, local }) => {
      const busca = termoBusca.toLowerCase().trim();
      const bateuCategoria = filtroCategoria === "todos" || categoria.toLowerCase() === filtroCategoria;
      const bateuPesquisa = !busca || titulo.toLowerCase().includes(busca) || local.toLowerCase().includes(busca);
  
      return bateuCategoria && bateuPesquisa;
    });
  
    if (!dadosFiltrados.length) {
      container.innerHTML = `<p class="sem-resultados">Nenhum local encontrado para esta busca.</p>`;
      return;
    }
  
    container.innerHTML = dadosFiltrados.map(({ tema, titulo, faixaEtaria, local, telefone, horario }) => `
      <div class="card" data-theme="${tema}">
        <div class="card-header">
          <h2 class="card-title">${titulo}</h2>
        </div>
        <div class="tags-container">
          <div class="tag-item">${icones.user}<span>${faixaEtaria}</span></div>
          <div class="tag-item">${icones.pin}<span>${local}</span></div>
          <div class="tag-item">${icones.phone}<span>${telefone}</span></div>
          <div class="tag-item">${icones.clock}<span>${horario}</span></div>
        </div>
      </div>
    `).join("");
  }
  
  function inicializar() {
    renderizarCards();
  
    // Filtros de Categoria
    document.querySelectorAll(".filtro").forEach((filtro) => {
      filtro.addEventListener("click", () => {
        if (filtro.getAttribute("aria-label") === "Mapa") return;
  
        document.querySelector(".filtro.ativo")?.classList.remove("ativo");
        filtro.classList.add("ativo");
  
        filtroCategoria = filtro.textContent.trim().toLowerCase();
        renderizarCards();
      });
    });
  
    // Pesquisa do Header
    const searchBox = document.querySelector(".search-box");
    const searchBtn = document.querySelector(".search-btn");
    const searchInput = document.querySelector(".search-input");
  
    if (searchBtn && searchBox && searchInput) {
      searchBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isActive = searchBox.classList.toggle("active");
        if (isActive) searchInput.focus();
      });
  
      searchInput.addEventListener("input", (e) => {
        termoBusca = e.target.value;
        renderizarCards();
      });
  
      document.addEventListener("click", (e) => {
        if (!searchBox.contains(e.target)) {
          searchBox.classList.remove("active");
        }
      });
    }
  }
  
  document.readyState === "loading" 
    ? document.addEventListener("DOMContentLoaded", inicializar) 
    : inicializar();