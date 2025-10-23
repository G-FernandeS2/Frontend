// =========================================
// === ARQUIVO DE VIEWS: views.js        ===
// =========================================
// Contém as funções de "template" que retornam
// o HTML para cada página da SPA.

/**
 * Mock Data (Dados Fictícios) para os Projetos
 * (Simulando uma chamada de API / Banco de Dados)
 */
const dataProjetos = [
    {
        id: 1,
        img: 'https://via.placeholder.com/400x250?text=Projeto+Educação',
        alt: 'Projeto de Educação',
        tags: [
            { text: 'Educação', class: 'tag-primary' },
            { text: 'Prioridade', class: 'tag-accent' }
        ],
        title: 'Projeto Educação Digital',
        text: 'Levando acesso à tecnologia para crianças em áreas remotas.',
        link: '#/projetos/educacao'
    },
    {
        id: 2,
        img: 'https://via.placeholder.com/400x250?text=Projeto+Saúde',
        alt: 'Projeto de Saúde',
        tags: [
            { text: 'Saúde', class: 'tag-secondary' }
        ],
        title: 'Saúde Comunitária',
        text: 'Atendimento médico e odontológico para comunidades carentes.',
        link: '#/projetos/saude'
    },
    {
        id: 3,
        img: 'https://via.placeholder.com/400x250?text=Meio+Ambiente',
        alt: 'Projeto Meio Ambiente',
        tags: [
            { text: 'Meio Ambiente', class: 'tag-secondary' }
        ],
        title: 'Reflorestamento',
        text: 'Plantando árvores nativas para recuperar a mata ciliar.',
        link: '#/projetos/ambiente'
    }
];

/**
 * Função Template para um único Card de Projeto
 */
function createProjectCard(projeto) {
    // Gera as tags dinamicamente
    const tagsHtml = projeto.tags.map(tag => 
        `<span class="tag ${tag.class}">${tag.text}</span>`
    ).join('');

    // Retorna o HTML do card (usando as classes CSS que já criamos)
    return `
        <div class="col-4">
            <div class="card">
                <img src="${projeto.img}" alt="${projeto.alt}" class="card-image">
                <div class="card-content">
                    <div class="card-tags">
                        ${tagsHtml}
                    </div>
                    <h3 class="card-title">${projeto.title}</h3>
                    <p class="card-text">${projeto.text}</p>
                    <a href="${projeto.link}" class="btn btn-primary">Saiba Mais</a>
                </div>
            </div>
        </div>
    `;
}

// --- Funções de View (Chamadas pelo Roteador) ---

function homeView() {
    return `
        <div class="container">
            <h1>Bem-vindo à Plataforma de ONGs</h1>
            <p>Este é o conteúdo da página inicial, carregado via JavaScript.</p>
            <p>Use o menu acima para navegar pelas seções.</p>
            
            <h2>Teste o Modal</h2>
            <button class="btn btn-primary" data-modal-target="#meu-modal">Abrir Modal de Teste</button>
        </div>
    `;
}

function projetosView() {
    // Gera todos os cards usando o .map() e a função template
    const cardsHtml = dataProjetos.map(createProjectCard).join('');
    
    return `
        <div class="container">
            <h2>Nossos Projetos <span class="badge badge-secondary">Novo</span></h2>
            <p>Conheça as causas que apoiamos. Este conteúdo é 100% dinâmico.</p>
            
            <div class="grid-12">
                ${cardsHtml}
            </div>
        </div>
    `;
}

function contatoView() {
    // Retorna o HTML exato do formulário que já estilizaamos
    // Adicionamos os IDs (#) para o JS poder encontrar os elementos
    return `
        <div class="container">
            <h2>Fale Conosco</h2>
            <p>Tem dúvidas ou quer ser um parceiro? Envie-nos uma mensagem.</p>
            
            <div class="alert alert-success hidden" id="alert-success">
                <strong>Sucesso!</strong> Sua mensagem foi enviada.
            </div>
            <div class="alert alert-error hidden" id="alert-error">
                <strong>Erro!</strong> Verifique os campos e tente novamente.
            </div>

            <div class="grid-12">
                <form class="contact-form col-8" id="contact-form" novalidate>
                    
                    <div class="form-group">
                        <label for="nome">Nome Completo</label>
                        <input type="text" id="nome" name="nome" placeholder="Seu nome completo" required>
                        <div class="error-message" id="nome-error"></div>
                    </div>

                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input type="email" id="email" name="email" placeholder="seu-email@dominio.com" required>
                        <div class="error-message" id="email-error"></div>
                    </div>

                    <div class="form-group">
                        <label for="mensagem">Mensagem</label>
                        <textarea id="mensagem" name="mensagem" rows="6" placeholder="Escreva sua mensagem aqui..." required minlength="10"></textarea>
                        <div class="error-message" id="mensagem-error"></div>
                    </div>

                    <div class="form-group">
                        <button type="submit" class="btn btn-primary" id="submit-button">Enviar Mensagem</button>
                    </div>
                </form>
                
                <aside class="col-4">
                    <h3>Informações</h3>
                    <p><strong>Email:</strong> contato@plataforma.org</p>
                    <p><strong>Telefone:</strong> (11) 99999-9999</p>
                </aside>
            </div>
        </div>
    `;
}

function notFoundView() {
    return `
        <div class="container">
            <h1>Erro 404</h1>
            <p>Página não encontrada.</p>
            <a href="#/" class="btn btn-primary">Voltar ao Início</a>
        </div>
    `;
}