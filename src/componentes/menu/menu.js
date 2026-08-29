import { menuShow } from "./script.js";

export class menuClass extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `
         <link rel="stylesheet" href="src/componentes/menu/menu.css">
         <link rel="stylesheet" href="src/view/css/style.css">
        
       <header>
         
           <header>
        <nav class="nav-bar">
            <div class="logo">
                <img src="img/logo-comuna-esportes.png" alt="" class="logo-img">
            </div>
            <div class="main-nav">

                <ul>
                    <li class="nav-item"> <a href="#" class="nav-link"> Início </a></li>
                    <li class="nav-item"><a href="#" class="nav-link"> Locais </a></li>
                    <li class="nav-item"><a href="#" class="nav-link"> Notícias </a></li>
                </ul>


            </div>
            <div class="nav-right">
                <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="7" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>

                <div class="avatar">SR</div>


                <div class="mobile-menu-icon">
                    <button class="menu-toggle" aria-label="Abrir menu">☰</button>
                </div>

            </div>

        </nav>

        <div class="mobile-menu">

            <ul>
                <li class="nav-item"> <a href="#" class="nav-link"> Início </a></li>
                <li class="nav-item"><a href="#" class="nav-link"> Locais </a></li>
                <li class="nav-item"><a href="#" class="nav-link"> Notícias </a></li>
            </ul>

        </div>

        </header>

        `
    }
    
     connectedCallback() {
        menuShow(this.shadowRoot);
    }
}