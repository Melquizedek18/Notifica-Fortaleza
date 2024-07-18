document.addEventListener('DOMContentLoaded', function () {
    const analisarButton = document.getElementById('analisar-button');
    const denunciarButton = document.getElementById('denunciar-button');
    const overlayAnalisar = document.getElementById('transition-overlay-analisar');
    const overlayDenunciar = document.getElementById('transition-overlay-denunciar');

    analisarButton.addEventListener('click', function () {
        overlayAnalisar.classList.add('show');
        setTimeout(() => {
            window.location.href = 'analisar.html';
        }, 1000); // Ajuste o tempo conforme necessário
    });

    denunciarButton.addEventListener('click', function () {
        overlayDenunciar.classList.add('show');
        setTimeout(() => {
            window.location.href = 'denunciar.html';
        }, 1000); // Ajuste o tempo conforme necessário
    });
});
