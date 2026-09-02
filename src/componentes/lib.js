import { menuClass } from "./menu/menu.js"
import{ footerClass } from "./footer/footer.js"
import { modalidadeClass } from "./modalidades/modalidades.js";
customElements.define('tcc-menu' , menuClass); 
customElements.define('tcc-footer' , footerClass); 
customElements.define('tcc-modalidades', modalidadeClass)