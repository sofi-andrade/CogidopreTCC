export function menuShow(shadowRoot){

    let btnHam =shadowRoot.querySelector('.menu-toggle');
    let menuMobile = shadowRoot.querySelector('.mobile-menu');
    btnHam.addEventListener('click', () => {
        
           const isOpen = menuMobile.classList.toggle('open');
           btnHam.textContent = isOpen ? '✕' : '☰';
        });

}

export function setupSearchMove(shadowRoot) {
    const searchWrap = shadowRoot.querySelector('.search-wrap');
    const navBar = shadowRoot.querySelector('.nav-bar');
    const navRight = shadowRoot.querySelector('.nav-right');

    const mediaQuery = window.matchMedia('(max-width: 768px)');

    function moveSearch(e) {
        if (e.matches) {
            // Tela pequena: move a busca pro final do nav-bar (nova linha)
            navBar.appendChild(searchWrap);
        } else {
            // Tela grande: volta pro nav-right, antes do avatar
            const avatar = navRight.querySelector('.avatar');
            navRight.insertBefore(searchWrap, avatar);
        }
    }

    moveSearch(mediaQuery);
    mediaQuery.addEventListener('change', moveSearch);
}