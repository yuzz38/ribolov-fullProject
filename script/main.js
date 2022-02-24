const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    allowTouchMove: false,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
    breakpoints: {  
      '10': {
      
        allowTouchMove: true,},
     
        '780': {
          
          allowTouchMove: false,},
    },
  
  });
  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    allowTouchMove: false,

    slidesPerView: 5,
    spaceBetween: 40,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
    breakpoints: {  
      '10': {
        slidesPerView: 2,
        spaceBetween: 20,
        allowTouchMove: true,},
      '580': {
        slidesPerView: 4,
        spaceBetween: 40, 
        allowTouchMove: false,},
        '780': {
          slidesPerView: 5,
          spaceBetween: 40, 
          allowTouchMove: false,},
    },
  
  });
  const swiper3 = new Swiper('.swiper3', {
    // Optional parameters
    direction: 'horizontal',
    allowTouchMove: false,

    slidesPerView: 3,
    spaceBetween: 30,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
    },
    breakpoints: {  
      '10': {
        slidesPerView: 2,
        spaceBetween: 20,
        allowTouchMove: true,},
      '580': {
        slidesPerView: 3,
        spaceBetween: 40, 
        allowTouchMove: false,},
        '780': {
          slidesPerView: 3,
          spaceBetween: 40, 
          allowTouchMove: false,},
    },
  
  });
  $(document).ready(function(e){
    $(".header-burger").click(function(event){
      event.preventDefault();
       $( ".nav-block").slideToggle();
       $(".header-burger").toggleClass("header-burger--active");
       $(".nav-menu").toggleClass("nav-menu__active")
  });
  $(".nav-btn").click(function(event){
    event.preventDefault();
    $(".nonclick").toggleClass("nonclick--active");
    $(".loopin").toggleClass("loopin--close");
    $(".hidden-panel").slideToggle();;
  })
  });
  $('.button').click( function(e) {
    e.preventDefault();
    $('.overlay').fadeIn();
  });
  
      // Закрытие окна на крестик
      $('.close-popup').click( function() {
        $('.overlay').fadeOut();
      });
      
      // Закрытие окна на поле
      $(document).mouseup( function (e) { 
        var popup = $('.popup');
        if (e.target != popup[0] && popup.has(e.target).length === 0){
          $('.overlay').fadeOut();
        }
      });