const onda1 = document.getElementById('onda1')

const onda2 = document.getElementById('onda2')

const onda3 = document.getElementById('onda3')

const onda4 = document.getElementById('onda4')



 window.addEventListener('scroll', function(){

const rolagemPos = window.scrollY

 onda1.style.backgroundPositionX = 400 + rolagemPos * 4 + 'px';
 })

 const titulo = document.querySelector('.titulo');
 const secaoPrincipal = document.querySelector('#principal');

window.addEventListener('scroll', function() {
  const rolagemPos = window.scrollY;
  const alturaTitulo = titulo.clientHeight;

  if (rolagemPos < secaoPrincipal.clientHeight - alturaTitulo) {
    titulo.style.transform = `translateY(${rolagemPos}px)`;
  } else {
    titulo.style.transform = `translateY(${secaoPrincipal.clientHeight - alturaTitulo}px)`;
  }
});



const acessibilidadeLink = document.getElementById('acessibilidade-link');
const acessibilidadeMenu = document.getElementById('acessibilidade-menu');

acessibilidadeLink.addEventListener('click', function (e) {
  e.preventDefault();
  acessibilidadeMenu.classList.toggle('active');
});

const botoesAcessibilidade = document.querySelectorAll('.acessibilidade-btn');

botoesAcessibilidade.forEach(function (botao) {
  botao.addEventListener('click', function () {
    acessibilidadeMenu.classList.remove('active');
  });
});





const header = document.querySelector('.header');

const scrollPoint = 820;

function checkScroll() {
  if (window.scrollY > scrollPoint) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', checkScroll);










const leitorDeTelaBtn = document.querySelector('.acessibilidade-btn:nth-child(1)');
const aumentarFonteBtn = document.querySelector('.acessibilidade-btn:nth-child(2)');

aumentarFonteBtn.addEventListener('click', function () {
    document.body.classList.toggle('fonte');

    const isFonteAtivada = document.body.classList.contains('fonte');

    aumentarFonteBtn.textContent = isFonteAtivada ? 'Diminuir Fonte' : 'Aumentar Fonte';
});

