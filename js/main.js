$(function () {
  $('.menu__btn').on('click', function () {
    $('.header__item').toggleClass('header__item--active');
  }
  );

  $('.nav__item').click(function () {
    $('.nav__item').removeClass('nav__item--active');  
    $(this).toggleClass('nav__item--active')
  })

  $('.nav__menu-btn').click(function () {
    $('.nav__block-items').toggleClass('nav__block-items--active');
    $('.milk-shadow').toggleClass('milk-shadow--active');
  })

  $('.menu__btn').click(function () {
    $('.milk-shadow').toggleClass('milk-shadow--active');
  })
  
});