// Dados Dinâmicos dos Cards
const dadosEsportes = [
  {
    titulo: "Futebol comunidade",
    faixaEtaria: "Todas as idades",
    local: "São Miguel Paulista",
    telefone: "11 99999-9999",
    horario: "6:00 - 16:00",
    categoria: "Futebol",
    tema: "laranja"
  },
  {
    titulo: "Vôlei comunidade",
    faixaEtaria: "Jovem e Adulto",
    local: "JD Ângela",
    telefone: "11 99999-9999",
    horario: "6:00 - 16:00",
    categoria: "Vôlei",
    tema: "roxo"
  },
  {
    titulo: "Basquete comunidade",
    faixaEtaria: "Crianças e Jovens",
    local: "CD Tiradentes",
    telefone: "11 99999-9999",
    horario: "6:00 - 16:00",
    categoria: "Basquete",
    tema: "laranja"
  }
];

// Ícones SVG reutilizáveis
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

  const dadosFiltrados = dadosEsportes.filter(item => {
    // Normalização para comparar sem problemas de maiúsculas/minúsculas
    const categoriaItem = item.categoria.toLowerCase().trim();
    const bateuCategoria = filtroCategoria === "todos" || categoriaItem === filtroCategoria;
    
    const tituloItem = item.titulo.toLowerCase().trim();
    const localItem = item.local.toLowerCase().trim();
    const bateuPesquisa = tituloItem.includes(termoBusca) || localItem.includes(termoBusca);

    return bateuCategoria && bateuPesquisa;
  });

  if (dadosFiltrados.length === 0) {
    container.innerHTML = `<p class="sem-resultados">Nenhum local encontrado para esta busca.</p>`;
    return;
  }

  container.innerHTML = dadosFiltrados.map(item => `
    <div class="card" data-theme="${item.tema}">
      <div class="card-header">
        <h2 class="card-title">${item.titulo}</h2>
      </div>
      <div class="tags-container">
        <div class="tag-item">${icones.user}<span>${item.faixaEtaria}</span></div>
        <div class="tag-item">${icones.pin}<span>${item.local}</span></div>
        <div class="tag-item">${icones.phone}<span>${item.telefone}</span></div>
        <div class="tag-item">${icones.clock}<span>${item.horario}</span></div>
      </div>
    </div>
  `).join("");
}

function inicializar() {
  renderizarCards();

  const filtros = document.querySelectorAll(".filtro");
  filtros.forEach((filtro) => {
    filtro.addEventListener("click", () => {
      if (filtro.getAttribute("aria-label") === "Mapa") return;

      filtros.forEach((item) => item.classList.remove("ativo"));
      filtro.classList.add("ativo");
      
      // Converte a categoria do botão para minúsculas
      filtroCategoria = filtro.textContent.trim().toLowerCase();
      renderizarCards();
    });
  });

  const inputPesquisa = document.querySelector(".barra-pesquisa input");
  if (inputPesquisa) {
    inputPesquisa.addEventListener("input", (e) => {
      termoBusca = e.target.value.toLowerCase().trim();
      renderizarCards();
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", inicializar);
} else {
  inicializar();
}