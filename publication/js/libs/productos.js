$('document').ready(function(){

// Slides
$('.responsive').slick({
  // centerMode: true,
  dots: true,
  focusOnSelect: false,
  infinite: false,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 3,
  speed: 700,
  prevArrow: $('.prev-slide'),
  nextArrow: $('.next-slide'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.responsive-02').slick({
  dots: true,
  focusOnSelect: false,
  infinite: false,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 3,
  speed: 700,
  prevArrow: $('.prev-slide-02'),
  nextArrow: $('.next-slide-02'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.responsive-03').slick({
  dots: true,
  focusOnSelect: false,
  infinite: false,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 3,
  speed: 700,
  prevArrow: $('.prev-slide-03'),
  nextArrow: $('.next-slide-03'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

});

// Fin Slides

// Ocultar y Mostrar Cajas
// Caja-uno
function Mostrar(){
  document.getElementById('caja').style.height = "auto";
}
function Ocultar(){
  document.getElementById('caja').style.display = "block";
  document.getElementById('caja').style.height = "0px";
  document.getElementById('caja').style.overflowY = "hidden";
}

function MostrarOcultar(){
  var b = document.getElementById('card-uno');
  var c = document.getElementById('card-dos');

  if(b.dataset.cambio == 'Ocultar'){
    Mostrar();
    b.dataset.cambio = 'Mostrar';
    Ocultar_dos();
    c.dataset.cambio = 'Ocultar';
  }
  else{
    // Ocultar();
    // b.dataset.cambio = 'Ocultar';
  }
}
// Fin Caja-uno
// Caja-dos
function Mostrar_dos(){
  document.getElementById('caja-dos').style.height = "auto";
}
function Ocultar_dos(){
  document.getElementById('caja-dos').style.display = "inline-block";
  document.getElementById('caja-dos').style.height = "0px";
  document.getElementById('caja-dos').style.overflowY = "hidden";
}

function MostrarOcultar_dos(){
  var c = document.getElementById('card-dos');
  var b = document.getElementById('card-uno');

  if(c.dataset.cambio == 'Ocultar'){
    Mostrar_dos();
    c.dataset.cambio = 'Mostrar';
    Ocultar();
    b.dataset.cambio = 'Ocultar';
    // console.log('Funciona')
  }
  else{
    // Ocultar_dos();
    // c.dataset.cambio = 'Ocultar';
  }
}
// Fin Caja-dos
// Fin Ocultar y Mostrar Cajas

// Boton Beneficios
function beneficios(){
  document.getElementById('cont-beneficios').style.display = "block";
  document.getElementById('cont-especificaciones').style.display = "none";
  document.getElementById('img-beneficios').style.marginTop = "-20rem";
  document.getElementById('arrow-down').style.display = "block";
  document.getElementById('ben-text').style.color = "#378144";
  document.getElementById('ben-icon').style.display = "none";
}

function Ocultar_beneficios(){
  document.getElementById('cont-beneficios').style.display = "none";
  document.getElementById('cont-especificaciones').style.display = "block";
  document.getElementById('img-beneficios').style.marginTop = "0rem";
  document.getElementById('arrow-down').style.display = "none";
  document.getElementById('ben-text').style.color = "#ffc508";
  document.getElementById('ben-icon').style.display = "inline-block";
}


// function Beneficios(){
//   var d = document.getElementById('Beneficios');

//   if (d.value == 'Beneficios') {
//     Ocultar_beneficios();
//     d.value = "Ocultar_beneficios";

//   };


// Scroll Ascensor

var scroll = new SmoothScroll('a[href*="#"]', {
        // Selectors
        ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
        header: null, // Selector for fixed headers (must be a valid CSS selector)

        // Speed & Easing
        speed: 750, // Integer. How fast to complete the scroll in milliseconds
        offset: 35, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
        easing: 'easeInOutCubic', // Easing pattern to use
        customEasing: function (time) {}, // Function. Custom easing pattern

        // Callback API
        before: function () {}, // Callback to run before scroll
        after: function () {} // Callback to run after scroll
});
// Fin Scroll Ascensor