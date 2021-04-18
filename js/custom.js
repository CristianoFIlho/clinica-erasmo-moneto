$(document).ready(function (){

  var i = setInterval(function () {
    clearInterval(i);

    $('.loader').fadeOut('slow');
    $('body').delay(500).css('overflow', 'visible');

  }, 1500);

  lightbox.option({
    'fadeDuration': 50,
  });

  // Facebook
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.10";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

});

$(document).ready( function() {
  $("#contact").validate({
    errorClass: "error",
    errorElement: "div",
    rules:{
      name:{
        required: true,
        minlength: 2
      },
      email:{
        required: true,
        email: true
      },
      phone:{
        required: true
      },
      subject:{
        required: true
      },
      message:{
        required: true,
        minlength: 100
      },
    },

    messages: {
      name:{
        required: "Digite o seu nome",
        minlength: "O seu nome deve conter, no mínimo, {0} caracteres"
      },
      email:{
        required: "Digite seu e-mail",
        email: "Por favor digite um e-mail válido"
      },
      phone:{
        required: "Digite o seu número de contato"
      },
      subject:{
        required: "Escolha um opção de assunto"
      },
      message:{
        required: "Digite a sua mensagem",
        minlength: "A mensagem deve conter, no mínimo, {0} caracteres"
      },
    }

  });
});

// Planos de saúde
$(document).ready(function(){
  $('.slide').slick({
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    ]
  });
});

// Slideshow
$(document).ready(function(){
  $('.slideshow').slick({
    autoplay: true,
    infinite: true,
    dots: false,
    arrows: false,
    speed: 1000,
    autoplaySpeed: 5000
  });
});

$(document).ready(function(){
  $(function() {
    $('.date').mask('00/00/0000');
    $('.time').mask('00:00:00');
    $('.date_time').mask('00/00/0000 00:00:00');
    $('.cep').mask('00000-000');
    $('.phone').mask('0000-0000');
    $('.phone_with_ddd').mask('(00) 0000-0000');
    $('.phone_us').mask('(000) 000-0000');
    $('.mixed').mask('AAA 000-S0S');
    $('.ip_address').mask('099.099.099.099');
    $('.percent').mask('##0,00%', {reverse: true});
    $('.clear-if-not-match').mask("00/00/0000", {clearIfNotMatch: true});
    $('.placeholder').mask("00/00/0000", {placeholder: "__/__/____"});
    $('.fallback').mask("00r00r0000", {
      translation: {
        'r': {
          pattern: /[\/]/,
          fallback: '/'
        },
        placeholder: "__/__/____"
      }
    });

    $('.selectonfocus').mask("00/00/0000", {selectOnFocus: true});

    $('.cep_with_callback').mask('00000-000', {onComplete: function(cep) {
      console.log('Mask is done!:', cep);
    },
    onKeyPress: function(cep, event, currentField, options){
      console.log('An key was pressed!:', cep, ' event: ', event, 'currentField: ', currentField.attr('class'), ' options: ', options);
    },
    onInvalid: function(val, e, field, invalid, options){
      var error = invalid[0];
      console.log ("Digit: ", error.v, " is invalid for the position: ", error.p, ". We expect something like: ", error.e);
    }
  });

    $('.crazy_cep').mask('00000-000', {onKeyPress: function(cep, e, field, options){
      var masks = ['00000-000', '0-00-00-00'];
      mask = (cep.length>7) ? masks[1] : masks[0];
      $('.crazy_cep').mask(mask, options);
    }});

    $('.cnpj').mask('00.000.000/0000-00', {reverse: true});
    $('.cpf').mask('000.000.000-00', {reverse: true});
    $('.money').mask('#.##0,00', {reverse: true});

    var SPMaskBehavior = function (val) {
      return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    spOptions = {
      onKeyPress: function(val, e, field, options) {
        field.mask(SPMaskBehavior.apply({}, arguments), options);
      }
    };

    $('.celphones').mask(SPMaskBehavior, spOptions);

    $(".bt-mask-it").click(function(){
      $(".mask-on-div").mask("000.000.000-00");
      $(".mask-on-div").fadeOut(500).fadeIn(500)
    })

    $('pre').each(function(i, e) {hljs.highlightBlock(e)});
  });

});

$(".btn-menu").click(function(){
  $(".menu").slideToggle();
});

if ($('.backToTop').length) {
    var scrollTrigger = 100, // px
    backToTop = function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $('.backToTop').addClass('show');
      } else {
        $('.backToTop').removeClass('show');
      }
    };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $('.backToTop').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 700);
    });
  }