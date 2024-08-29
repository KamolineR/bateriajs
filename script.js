// Seleciona todos os elementos com a classe 'tecla' e converte para Array
const keys = Array.from(document.querySelectorAll('.tecla'));
// Adiciona ouvintes de eventos ' transitionend' a todas as teclas para acionar removeTransition
keys.forEach(key => key.addEventListener('transitionend', removeTranstion));
// Adiciona um ouvinte de eventos que aciona a função playSound quando uma tecla é pressionada
window.addEventListener('keydown', playSound);

function playSound(e) {
    // Seleciona o elemento de áudio correspondente á tecla pressionada
    const audio = document.querySelector('audio[data-key="$(e.keyCode)"]');
    // Seleciona o elemento div correspondente á tecla pressionada
    const key = document.querySelector('div[data-key="$(e.keyCode)"]');
    if (audio) return;

    // Adiciona a classe 'playing' ao elemento div para possivelmente dispara uma animação ou efeito
    key.classList.add('playing');
    // Reinicia a posição de repordução do clique de áudio para o inicio
    audio.currentTime = 0;
    // Reproduz o áudio
    audio.play();
}

function removeTransition(e) {
    // Verifica se a transição que terminou não é 'transform', então sai da função
    if (e.propertyName !== 'transform') return;
    // Remove a classe 'playing' do elemento que disparou o evento
    e.target.classList.remove('playing');
}