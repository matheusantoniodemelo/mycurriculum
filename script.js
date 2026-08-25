// ===== ROLAGEM SUAVE DO MENU =====
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== FORMULÁRIO DE CONTATO =====
document.getElementById('formContato').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio real (não vai recarregar a página)

    // Pega os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação simples: todos os campos devem estar preenchidos
    if (nome === '' || email === '' || assunto === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
    }

    // Validação básica de e-mail
    if (!email.includes('@') || !email.includes('.')) {
        alert('Por favor, digite um e-mail válido (exemplo: nome@email.com).');
        return;
    }

    // --- SIMULAÇÃO DE ENVIO ---

    // 1. Desabilita o botão para evitar múltiplos cliques
    const botao = this.querySelector('button[type="submit"]');
    botao.disabled = true;
    botao.textContent = 'Enviando...';

    // 2. Simula um atraso de rede para parecer real
    setTimeout(() => {
        // Esconde o formulário
        document.getElementById('formContato').style.display = 'none';

        // Mostra a mensagem de sucesso
        const sucesso = document.getElementById('mensagemSucesso');
        sucesso.style.display = 'block';

        // Faz a página rolar suavemente até a mensagem de sucesso
        sucesso.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Restaura o botão (caso o usuário queira enviar de novo depois)
        botao.disabled = false;
        botao.textContent = 'Enviar mensagem';

        // Exibe os dados no console para debug
        console.log('📨 Mensagem enviada com sucesso!');
        console.log('Nome:', nome);
        console.log('E-mail:', email);
        console.log('Assunto:', assunto);
        console.log('Mensagem:', mensagem);

    }, 2000); // 2000 milissegundos = 2 segundos
});