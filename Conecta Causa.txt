<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plataforma Conecta Causa</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts: Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        /* Estilo base para a fonte e transições suaves */
        body {
            font-family: 'Inter', sans-serif;
        }
        .page-content {
            display: none; /* Esconde todas as páginas por padrão */
            animation: fadeIn 0.5s ease-in-out;
        }
        .page-content.active {
            display: block; /* Mostra a página ativa */
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body class="bg-gray-50 text-gray-800">

    <!-- Cabeçalho e Navegação -->
    <header class="bg-white shadow-md sticky top-0 z-50">
        <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" onclick="showPage('home')" class="text-2xl font-bold text-teal-600">Conecta Causa</a>
            <ul class="flex space-x-6">
                <li><a href="#" onclick="showPage('home')" class="text-gray-600 hover:text-teal-600 font-medium">Início</a></li>
                <li><a href="#" onclick="showPage('projetos')" class="text-gray-600 hover:text-teal-600 font-medium">Projetos</a></li>
                <li><a href="#" onclick="showPage('cadastro')" class="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 font-medium transition duration-300">Cadastre-se</a></li>
            </ul>
        </nav>
    </header>

    <main class="container mx-auto p-6 md:p-8">
        <!-- Página Inicial (index.html) -->
        <div id="home" class="page-content active">
            <section class="text-center mb-16">
                <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Unindo corações, transformando vidas.</h1>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto">A Conecta Causa é uma organização dedicada a criar um impacto positivo em nossa comunidade, conectando pessoas de bom coração a projetos que fazem a diferença.</p>
            </section>

            <section class="mb-16">
                <h2 class="text-3xl font-bold text-center mb-8">Nossa Missão, Visão e Valores</h2>
                <div class="grid md:grid-cols-3 gap-8">
                    <article class="bg-white p-6 rounded-lg shadow-sm">
                        <h3 class="text-xl font-semibold text-teal-600 mb-2">Missão</h3>
                        <p>Promover a solidariedade e o desenvolvimento social através de projetos educacionais, ambientais e de apoio comunitário.</p>
                    </article>
                    <article class="bg-white p-6 rounded-lg shadow-sm">
                        <h3 class="text-xl font-semibold text-teal-600 mb-2">Visão</h3>
                        <p>Ser uma referência de transformação social, construindo um futuro mais justo e sustentável para todos.</p>
                    </article>
                    <article class="bg-white p-6 rounded-lg shadow-sm">
                        <h3 class="text-xl font-semibold text-teal-600 mb-2">Valores</h3>
                        <p>Transparência, empatia, comprometimento, colaboração e inovação são os pilares que guiam nossas ações.</p>
                    </article>
                </div>
            </section>
            
            <section class="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 class="text-3xl font-bold mb-4">Faça Parte da Mudança</h2>
                    <p class="text-gray-600 mb-6">Sua ajuda é fundamental para continuarmos nosso trabalho. Veja como você pode se envolver e fazer a diferença hoje mesmo.</p>
                    <div class="flex space-x-4">
                        <a href="#" onclick="showPage('projetos')" class="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 font-medium transition duration-300">Ver Projetos</a>
                        <a href="#" onclick="showPage('cadastro')" class="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 font-medium transition duration-300">Seja Voluntário</a>
                    </div>
                </div>
                <img src="https://placehold.co/600x400/34d399/ffffff?text=Nossa+Equipe+em+Ação" alt="Equipe da ONG Conecta Causa trabalhando em um projeto comunitário." class="rounded-lg shadow-md w-full h-auto">
            </section>
            
            <section id="contato" class="mt-16 bg-white p-8 rounded-lg shadow-sm">
                <h2 class="text-3xl font-bold text-center mb-8">Informações de Contato</h2>
                 <div class="max-w-lg mx-auto text-center text-gray-600">
                    <p class="mb-2"><strong>Endereço:</strong> Rua da Esperança, 123, Centro, Cidade Feliz - SP</p>
                    <p class="mb-2"><strong>Email:</strong> contato@conectacausa.org</p>
                    <p><strong>Telefone:</strong> (11) 98765-4321</p>
                </div>
            </section>
        </div>

        <!-- Página de Projetos (projetos.html) -->
        <div id="projetos" class="page-content">
            <header class="text-center mb-12">
                <h1 class="text-4xl font-bold">Nossos Projetos Sociais</h1>
                <p class="text-lg text-gray-600 mt-2">Conheça as iniciativas que estão mudando realidades e veja como você pode ajudar.</p>
            </header>

            <section class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <article class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                    <img src="https://placehold.co/600x400/a78bfa/ffffff?text=Educação+para+Todos" alt="Crianças sorrindo em uma sala de aula." class="w-full h-48 object-cover">
                    <div class="p-6 flex-grow">
                        <h2 class="text-2xl font-bold mb-2">Educação para Todos</h2>
                        <p class="text-gray-600 mb-4">Oferecemos aulas de reforço e atividades culturais para crianças em situação de vulnerabilidade social.</p>
                    </div>
                    <div class="p-6 bg-gray-50">
                        <p class="font-semibold">Meta de Arrecadação: R$ 15.000,00</p>
                    </div>
                </article>
                <article class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                    <img src="https://placehold.co/600x400/f87171/ffffff?text=Sopa+Solidária" alt="Voluntários servindo sopa para a comunidade." class="w-full h-48 object-cover">
                    <div class="p-6 flex-grow">
                        <h2 class="text-2xl font-bold mb-2">Sopa Solidária</h2>
                        <p class="text-gray-600 mb-4">Distribuímos refeições quentes para pessoas em situação de rua todas as semanas.</p>
                    </div>
                     <div class="p-6 bg-gray-50">
                        <p class="font-semibold">Vagas para voluntários: 5</p>
                    </div>
                </article>
                <article class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                    <img src="https://placehold.co/600x400/60a5fa/ffffff?text=Horta+Comunitária" alt="Mãos plantando uma muda de alface em uma horta." class="w-full h-48 object-cover">
                    <div class="p-6 flex-grow">
                        <h2 class="text-2xl font-bold mb-2">Horta Comunitária</h2>
                        <p class="text-gray-600 mb-4">Cultivamos alimentos orgânicos em espaços urbanos para doação e consumo da comunidade local.</p>
                    </div>
                     <div class="p-6 bg-gray-50">
                        <p class="font-semibold">Meta de Arrecadação: R$ 8.000,00</p>
                    </div>
                </article>
            </section>

            <section class="grid md:grid-cols-2 gap-8">
                <div class="bg-teal-50 p-8 rounded-lg">
                    <h2 class="text-3xl font-bold text-teal-800 mb-4">Como Doar</h2>
                    <p class="text-teal-700 mb-6">Sua doação se transforma em material escolar, ingredientes para refeições e ferramentas para nossa horta. Contribua com qualquer valor e faça parte desta corrente do bem.</p>
                    <button class="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 font-medium w-full transition duration-300">Faça uma Doação Segura</button>
                </div>
                 <div class="bg-orange-50 p-8 rounded-lg">
                    <h2 class="text-3xl font-bold text-orange-800 mb-4">Seja Voluntário</h2>
                    <p class="text-orange-700 mb-6">Doe seu tempo e talento! Temos diversas oportunidades para você ajudar, desde dar aulas até cozinhar ou cuidar da horta. Sua ajuda é preciosa.</p>
                    <button onclick="showPage('cadastro')" class="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 font-medium w-full transition duration-300">Quero ser Voluntário</button>
                </div>
            </section>
        </div>

        <!-- Página de Cadastro (cadastro.html) -->
        <div id="cadastro" class="page-content">
            <header class="text-center mb-12">
                <h1 class="text-4xl font-bold">Formulário de Cadastro</h1>
                <p class="text-lg text-gray-600 mt-2">Preencha seus dados para se tornar um voluntário ou apoiador da Conecta Causa.</p>
            </header>

            <form class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <fieldset>
                    <legend class="text-2xl font-semibold mb-6 text-gray-700 w-full border-b pb-2">Dados Pessoais</legend>
                    <div class="mb-4">
                        <label for="nome" class="block text-gray-700 font-medium mb-2">Nome Completo</label>
                        <input type="text" id="nome" name="nome" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" required>
                    </div>
                    <div class="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label for="email" class="block text-gray-700 font-medium mb-2">E-mail</label>
                            <input type="email" id="email" name="email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" required>
                        </div>
                        <div>
                            <label for="nascimento" class="block text-gray-700 font-medium mb-2">Data de Nascimento</label>
                            <input type="date" id="nascimento" name="nascimento" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" required>
                        </div>
                    </div>
                     <div class="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label for="cpf" class="block text-gray-700 font-medium mb-2">CPF</label>
                            <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" required oninput="maskCPF(this)" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}">
                        </div>
                        <div>
                            <label for="telefone" class="block text-gray-700 font-medium mb-2">Telefone</label>
                            <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" required oninput="maskTelefone(this)" pattern="\(\d{2}\) \d{5}-\d{4}">
                        </div>
                    </div>
                </fieldset>

                <fieldset class="mt-8">
                    <legend class="text-2xl font-semibold mb-6 text-gray-700 w-full border-b pb-2">Endereço</legend>
                     <div class="grid md:grid-cols-3 gap-4 mb-4">
                        <div class="md:col-span-1">
                            <label for="cep" class="block text-gray-700 font-medium mb-2">CEP</label>
                            <input type="text" id="cep" name="cep" placeholder="00000-000" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" required oninput="maskCEP(this)" pattern="\d{5}-\d{3}">
                        </div>
                        <div class="md:col-span-2">
                             <label for="endereco" class="block text-gray-700 font-medium mb-2">Endereço (Rua e Número)</label>
                            <input type="text" id="endereco" name="endereco" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" required>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 gap-4 mb-4">
                         <div>
                            <label for="cidade" class="block text-gray-700 font-medium mb-2">Cidade</label>
                            <input type="text" id="cidade" name="cidade" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" required>
                        </div>
                         <div>
                            <label for="estado" class="block text-gray-700 font-medium mb-2">Estado</label>
                            <input type="text" id="estado" name="estado" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" required>
                        </div>
                    </div>
                </fieldset>
                
                <div class="mt-8">
                     <button type="submit" class="w-full bg-teal-600 text-white font-bold py-3 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300">Finalizar Cadastro</button>
                </div>
            </form>
        </div>
    </main>

    <!-- Rodapé -->
    <footer class="bg-gray-800 text-white mt-16">
        <div class="container mx-auto px-6 py-8 text-center">
            <p>&copy; 2025 Plataforma Conecta Causa. Todos os direitos reservados.</p>
            <p class="text-gray-400 mt-2">Construindo um futuro melhor, juntos.</p>
        </div>
    </footer>

    <!-- Script para navegação e máscaras de input -->
    <script>
        // Função para alternar a visibilidade das páginas
        function showPage(pageId) {
            // Esconde todas as seções de conteúdo
            document.querySelectorAll('.page-content').forEach(function(page) {
                page.classList.remove('active');
            });
            // Mostra a seção de conteúdo desejada
            const activePage = document.getElementById(pageId);
            if (activePage) {
                activePage.classList.add('active');
                window.scrollTo(0, 0); // Rola para o topo ao trocar de página
            }
        }
        
        // Funções de máscara para os campos do formulário
        function maskCPF(input) {
            let value = input.value.replace(/\D/g, ''); // Remove tudo que não é dígito
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            input.value = value.slice(0, 14); // Limita o tamanho
        }

        function maskTelefone(input) {
            let value = input.value.replace(/\D/g, '');
            value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
            value = value.replace(/(\d{5})(\d)/, '$1-$2');
            input.value = value.slice(0, 15);
        }

        function maskCEP(input) {
            let value = input.value.replace(/\D/g, '');
            value = value.replace(/^(\d{5})(\d)/, '$1-$2');
            input.value = value.slice(0, 9);
        }
        
        // Garante que a página inicial seja exibida ao carregar
        document.addEventListener('DOMContentLoaded', function() {
            showPage('home');
        });
    </script>
</body>
</html>
