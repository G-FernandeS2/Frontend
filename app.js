// =========================================
// === ARQUIVO PRINCIPAL: app.js         ===
// =========================================
// Este arquivo controla o app, escuta eventos
// e chama o roteador.

// Espera o DOM estar pronto para rodar o JS
document.addEventListener('DOMContentLoaded', () => {
    
    // --- ETAPA 1: LÓGICA DO "SHELL" INTERATIVO ---
    initMobileMenu();
    initModals();

    // --- ETAPA 2: INICIALIZAÇÃO DO ROTEADOR (SPA) ---
    // (O código do roteador vem aqui)
});

/**
 * ETAPA 1: Menu Hambúrguer
 * Adiciona o listener para o clique no botão toggle.
 */
function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('is-active');
            
            // Atualiza atributos de acessibilidade
            const isExpanded = mainNav.classList.contains('is-active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });
    }
}

/**
 * ETAPA 1: Modais
 * Adiciona listeners para abrir e fechar todos os modais.
 */
function initModals() {
    // Botões que abrem modais
    // (Ex: <button data-modal-target="#meu-modal">)
    const openButtons = document.querySelectorAll('[data-modal-target]');
    
    // Botões que fecham modais
    // (Ex: <button data-modal-close> ou o backdrop)
    const closeElements = document.querySelectorAll('[data-modal-close]');

    openButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.dataset.modalTarget;
            const modal = document.querySelector(modalId);
            if (modal) {
                modal.classList.add('is-visible');
            }
        });
    });

    closeElements.forEach(element => {
        element.addEventListener('click', () => {
            // Encontra o modal pai mais próximo e o fecha
            const modal = element.closest('.modal-backdrop');
            if (modal) {
                modal.classList.remove('is-visible');
            }
        });
    });
}// =========================================
// === app.js (Continuação)              ===
// =========================================

// --- ETAPA 2: ROTEADOR SPA ---

// 1. Onde o conteúdo será renderizado
const appRoot = document.getElementById('app-root');

// 2. Mapeamento das rotas para as "Views" (funções)
//    As Views (ex: homeView) estão no arquivo 'views.js'
const routes = {
    '/': homeView,
    '/projetos': projetosView,
    '/contato': contatoView,
    // Adicione outras rotas aqui (ex: '/sobre', '/voluntarios')
    // ...
};

/**
 * A função principal do Roteador.
 * Lê o hash da URL, encontra a View correspondente e a renderiza.
 */
function router() {
    // Pega o hash da URL (ex: #/contato -> /contato)
    // Se for vazio, usa '/' (home)
    const path = (location.hash.slice(1).toLowerCase() || '/').split('/')[0]; // Pega só a primeira parte
    const route = `/${path}`;

    // Encontra a função View no nosso objeto 'routes'
    // Se não encontrar, usa a 'notFoundView'
    const viewFunction = routes[route] || notFoundView;
    
    // Renderiza a View
    // 1. Gera o HTML chamando a função da View
    appRoot.innerHTML = viewFunction();

    // 2. (IMPORTANTE) Se a view for 'Contato', 
    //    precisamos ativar a validação do formulário.
    if (route === '/contato') {
        // A função initContatoForm() está no 'formValidation.js'
        initContatoForm();
    }
}

// 3. Escuta as mudanças na URL (hashchange)
window.addEventListener('hashchange', router);

// 4. Carrega a rota inicial quando a página é aberta
window.addEventListener('load', router);
