$(function() {

  $(window).load(function(){
    setTimeout(function(){
      $('.preloader').fadeOut('slow');
    }, 500)
  });

});

  var bodyanimate = document.querySelector('body').animate({
      backgroundPosition: ['0%', '50%', '100%', '50%', '0%'],
  }, {
      easing: 'ease',
      iterations: Infinity,
      duration: 30000
  });

    var showsidebar = document.querySelector('.s-animate').animate({
        left: ['-40px', 0],
        opacity: [0, 1],
    }, {
        easing: 'linear',
        duration: 500
    });

    var sidebartitle = document.querySelector('.b-sidebar__title').animate({
        left: ['-80px', 0],
        opacity: [0, 1],
    }, {
        easing: 'linear',
        duration: 650
    });

    var sidebaremail = document.querySelector('.b-sidebar__email').animate({
        left: ['-80px', 0],
        opacity: [0, 1],
    }, {
        easing: 'linear',
        duration: 650
    });

    var showletter = document.querySelector('.b-container__head').animate({
        marginTop: ['250px', '150px'],
        opacity: [0, 1],
    }, {
        easing: 'linear',
        duration: 550
    });

    var showheadline = document.querySelector('.b-container__headline').animate({
        marginTop: ['115px', '25px'],
        opacity: [0, 1],
    }, {
        easing: 'linear',
        duration: 650
    });

    var showparagraph = document.querySelector('.b-container__txt').animate({
        marginTop: ['135px', '45px'],
        opacity: [0, 1],
    }, {
        easing: 'linear',
        duration: 750
    });

    var cursorpulsate = document.querySelector('.b-headline__cursor').animate({
        opacity: [0, 1, 1, 1, 1, 1, 0],
    }, {
        easing: 'linear',
        iterations: Infinity,
        duration: 1000
    });

	/*var player = document.getElementById('toAnimate').animate([
    { transform: 'scale(1)', opacity: 1, offset: 0 },
    { transform: 'scale(.5)', opacity: .5, offset: .3 },
    { transform: 'scale(.667)', opacity: .667, offset: .7875 },
    { transform: 'scale(.6)', opacity: .6, offset: 1 }
  ], {
    duration: 700, //миллисекунды
    easing: 'ease-in-out', //'linear', кривая Безье, и т.д.
    delay: 10,  //миллисекунды
    iterations: Infinity, //или число
    direction: 'alternate', //'normal', 'reverse', и т.д.
    fill: 'forwards' //'backwards', 'both', 'none', 'auto'
  });*/
