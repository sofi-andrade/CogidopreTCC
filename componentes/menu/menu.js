export class menuClass extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `
        <style>
         
        :host{
            display : block 
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

                header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0 auto;
            padding: 19px 20px;
            max-width: 1200px;
            width: 100%;
    
           
        }

        a {
           color: inherit;
           text-decoration: none;
        }

        .logo-img {
            height: 56px;
            width: auto;
            max-width: 260px;
        }

        
        @media (max-width: 480px) {
            .logo-img {
                height: 40px;
            }
        }

        nav.main-nav {
            display: flex;
            gap: 40px;
            font-weight: 600;
            font-size: 1rem;
        }

        nav.main-nav a {
            padding: 8px 14px;
            border-radius: 40px;
            transition: background 0.2s ease;
        }

        nav.main-nav a:hover {
            background: rgba(255, 255, 255, 0.1);
        }

        .nav-right {
            display: flex;
            align-items: center;
            gap: 20px;
             flex-shrink: 0;
        }

        .search-icon {
            width: 22px;
            height: 22px;
            cursor: pointer;
        }

        .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: linear-gradient(135deg, #6b3fa0, #8e5ac9);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 0.9rem;
            color: #fff;
        }

        .menu-toggle {
            display: none;
            background: none;
            border: none;
            color: #fff;
            font-size: 1.6rem;
            cursor: pointer;
        }

        @media (max-width: 900px) {
        nav.main-nav {
        gap: 24px;
        }
        }
        @media (max-width: 768px) {
        nav.main-nav {
         display: none;
         }
        
        .menu-toggle {
         display: block;
        }

        }
        @media (max-width: 480px) {
        header {
        padding: 16px;
        }

        .logo {
        font-size: 1.2rem;
        }
        }
        </style>
        
       <header>
            <div class="logo">
                <img src="componentes/menu/img/logo-comuna-esportes.png" alt="" class="logo-img">       
            </div>
            <nav class="main-nav">
            
                <a href="comuna-esportes.html" > Início  </a>
                <a href="locia.html" > Locais   </a>
                <a href="#" > Notícias </a>
            </nav>
            <div class="nav-right">
                <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="7" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
            <div class="avatar">SR</div>
            <button class="menu-toggle" aria-label="Abrir menu">☰</button>
        </div>
        </header>
        
        `
    }
}