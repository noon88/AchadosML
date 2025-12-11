const fadeTexts = document.querySelectorAll('.fade-text');

function checkFadeTexts() {
  const triggerBottom = window.innerHeight / 5 * 4;

  fadeTexts.forEach(text => {
    const textTop = text.getBoundingClientRect().top;
    if(textTop < triggerBottom){
      text.classList.add('show');
    }
  });
}

// Ativa no scroll
window.addEventListener('scroll', checkFadeTexts);

// Ativa assim que a página carrega
window.addEventListener('load', checkFadeTexts);