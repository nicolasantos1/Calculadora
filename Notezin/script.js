document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('meuFormulario');

    formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obter os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // Armazenar os valores no LocalStorage
    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);

    alert('Informações salvas localmente!');
    });

    // Preencher os campos do formulário com os valores do LocalStorage, se existirem
    const nomeSalvo = localStorage.getItem('nome');
    const emailSalvo = localStorage.getItem('email');
    if (nomeSalvo) {
        document.getElementById('nome').value = nomeSalvo;
    }
    if (emailSalvo) {
        document.getElementById('email').value = emailSalvo;
    }
});