export function menuShow(shadowRoot){

    let btnHam =shadowRoot.querySelector('.menu-toggle');
    let menuMobile = shadowRoot.querySelector('.mobile-menu');
    btnHam.addEventListener('click', () => {
        
           const isOpen = menuMobile.classList.toggle('open');
           btnHam.textContent = isOpen ? '✕' : '☰';
        });

}