const form = document.getElementById('contatoForm');
const modal = document.getElementById('modal');
const fecharModal = document.getElementById('fecharModal');

form.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const mensagem = document.getElementById('mensagem');

    const erroNome = document.getElementById('erroNome');
    const erroEmail = document.getElementById('erroEmail');
    const erroMensagem = document.getElementById('erroMensagem');

    // Limpa erros anteriores
    erroNome.textContent = '';
    erroEmail.textContent = '';
    erroMensagem.textContent = '';

    let valido = true;

    // Valida nome
    if (nome.value.trim() === '') {
        erroNome.textContent = 'Por favor, informe seu nome.';
        valido = false;
    }

    // Valida email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        erroEmail.textContent = 'Por favor, informe seu e-mail.';
        valido = false;
    } else if (!regexEmail.test(email.value.trim())) {
        erroEmail.textContent = 'Informe um e-mail válido (ex: usuario@dominio.com).';
        valido = false;
    }

    // Valida mensagem
    if (mensagem.value.trim() === '') {
        erroMensagem.textContent = 'Por favor, escreva sua mensagem.';
        valido = false;
    }

    // Se tudo ok, simula envio
    if (valido) {
        nome.value = '';
        email.value = '';
        mensagem.value = '';
        modal.classList.add('modal--visivel');
    }
});

fecharModal.addEventListener('click', function() {
    modal.classList.remove('modal--visivel');
});