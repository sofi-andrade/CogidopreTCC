import { menuShow , setupSearchMove } from "./script.js";

export class menuClass extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `
         <link rel="stylesheet" href="src/componentes/menu/menu.css">
         
        
       
         
           <header>
        <nav class="nav-bar">
            <div class="logo">
                <img src="src/img/logo-comuna-esportes.png" alt="" class="logo-img">
            </div>
            <div class="main-nav">

                <ul>
                    <li class="nav-item"> <a href="#" class="nav-link"> Início </a></li>
                    <li class="nav-item"><a href="#" class="nav-link"> Locais </a></li>
                    <li class="nav-item"><a href="#" class="nav-link"> Notícias </a></li>
                </ul>


            </div>
            <div class="nav-right">
                <div class="search-wrap">
                    <div class="search-icon">
                        <input type="text" class="search-txt" name="">
                        <a href="#" class="search-btn">
                         <svg viewBox="0 0 24 24"  width="18" height="18" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round">
                            <circle cx="11" cy="11" r="7" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                         </svg>
                        </a>
                       
                    </div>   
                </div>
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
        setupSearchMove(this.shadowRoot);
    }
}