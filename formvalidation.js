// =========================================
// === ARQUIVO: formValidation.js        ===
// =========================================
// Contém toda a lógica de validação avançada
// para o formulário de contato.

/**
 * Função principal, chamada pelo roteador (app.js)
 * DEPOIS que a view de contato é renderizada.
 */
function initContatoForm() {
    const form = document.getElementById('contact-form');
    if (!form) return; // Sai se o formulário não existir

    // Seleciona os elementos do formulário
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const mensagemInput = document.getElementById('mensagem');
    const submitButton = document.getElementById('submit-button');

    // Seleciona os alertas de feedback
    const alertSuccess = document.getElementById('alert-success');
    const alertError = document.getElementById('alert-error');

    /**
     * Validação em tempo real (no 'input')
     * (Especificação: "verificação de consistência")
     */
    nomeInput.addEventListener('input', () => validateField(nomeInput));
    emailInput.addEventListener('input', () => validateField(emailInput));
    mensagemInput.addEventListener('input', () => validateField(mensagemInput));

    /**
     * Validação no Envio (Submit)
     */
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio real (SPA)

        // Valida todos os campos uma última vez
        const isNomeValid = validateField(nomeInput);
        const isEmailValid = validateField(emailInput);
        const isMensagemValid = validateField(mensagemInput);

        // Esconde alertas antigos
        alertSuccess.classList.add('hidden');
        alertError.classList.add('hidden');

        if (isNomeValid && isEmailValid && isMensagemValid) {
            // TUDO VÁLIDO: Simula o envio
            console.log('Formulário válido, enviando...');
            submitButton.classList.add('is-loading'); // Mostra spinner
            submitButton.disabled = true;

            // Simula uma chamada de API (2 segundos)
            setTimeout(() => {
                submitButton.classList.remove('is-loading');
                submitButton.disabled = false;
                alertSuccess.classList.remove('hidden'); // Mostra sucesso
                form.reset(); // Limpa o formulário
                
                // Limpa os estados de 'is-invalid' (caso existam)
                clearError(nomeInput);
                clearError(emailInput);
                clearError(mensagemInput);

            }, 2000);

        } else {
            // INVÁLIDO: Mostra erro
            console.log('Formulário inválido.');
            alertError.classList.remove('hidden');
        }
    });
}

/**
 * Função de validação genérica para um campo
 * (Retorna true se válido, false se inválido)
 */
function validateField(field) {
    const errorElement = document.getElementById(`${field.id}-error`);
    let errorMessage = '';

    // Remove espaços em branco
    const value = field.value.trim();

    // 1. Verifica se está vazio (para campos 'required')
    if (field.required && value === '') {
        errorMessage = 'Este campo é obrigatório.';
    }
    // 2. Verifica tipo 'email'
    else if (field.type === 'email' && !isValidEmail(value)) {
        errorMessage = 'Por favor, insira um e-mail válido.';
    }
    // 3. Verifica 'minlength' (para a mensagem)
    else if (field.minLength > 0 && value.length < field.minLength) {
        errorMessage = `Este campo precisa ter no mínimo ${field.minLength} caracteres.`;
    }

    // Se houver erro, mostra. Se não, limpa.
    if (errorMessage) {
        showError(field, errorElement, errorMessage);
        return false;
    } else {
        clearError(field, errorElement);
        return true;
    }
}

// --- Funções Auxiliares ---

function showError(field, errorElement, message) {
    field.classList.add('is-invalid');
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function clearError(field, errorElement) {
    field.classList.remove('is-invalid');
    if (errorElement) {
        errorElement.textContent = '';
    }
}

function isValidEmail(email) {
    // Regex simples para validação de e-mail
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}