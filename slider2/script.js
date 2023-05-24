const slider = document.querySelectorAll('.slider');
const botaoVoltar = document.getElementById('botao-voltar');
const botaoAvancar = document.getElementById('botao-avancar');

let currentSlide = 0;

function escondeSlide(){
    slider.forEach(item => item.classList.remove('on'));
}

function mostraSlide(){
    slider[currentSlide].classList.add('on');
}

botaoVoltar.addEventListener('click', slideAnterior);
botaoAvancar.addEventListener('click', proximoSlide);

function proximoSlide(){
    escondeSlide()
    if(currentSlide === slider.length - 1){
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    mostraSlide()
}

function slideAnterior(){
    escondeSlide()
    if(currentSlide === 0){
        currentSlide = slider.length - 1;
    } else {
        currentSlide--;
    }
    mostraSlide()
}