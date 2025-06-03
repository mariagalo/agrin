document.querySelector('button').addEventListener('click', function() {
    alert('Obrigado por visitar nosso site!');
});

document.querySelector('form button').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
});