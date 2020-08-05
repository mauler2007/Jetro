
$(function () {

  $('.slider-big').slick({
    arrows: true,
    asNavFor: '.slider-mini',
    slidesToShow: 1,
    slidesToScroll: 1,
    // prevArrow: '.arow _prev',
    // nextArrow: '.arow _next',
    //  тут когда ставлю focusonSelect то показывает картинку со следующим порядковым номером послу указанного мной.  ставлю2 - показывает третий  
  });

  $('.slider-mini').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-big',
    focusOnSelect: true,
    
  });
  


});

