document.addEventListener('DOMContentLoaded', function () {
    const analisarButton = document.getElementById('analisar-button');
    const denunciarButton = document.getElementById('denunciar-button');
    const overlay = document.getElementById('transition-overlay');

    analisarButton.addEventListener('click', function () {
        overlay.classList.add('show');
        setTimeout(() => {
            window.location.href = 'analisar.html';
        }, 1000); // Ajuste o tempo conforme necessário
    });

    denunciarButton.addEventListener('click', function () {
        overlay.classList.add('show');
        setTimeout(() => {
            window.location.href = 'denunciar.html';
        }, 1000); // Ajuste o tempo conforme necessário
    });
});
// analisar.