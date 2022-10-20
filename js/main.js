"use strict";
"use strict";

$(function () {
  var person__menu__btn = document.getElementById('person__menu__btn');
  var person = document.querySelector('.person');
  person__menu__btn.addEventListener('click', function () {
    person.classList.toggle('open');
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.person')) {
      person.classList.remove('open');
    }
  });
  var openSearch = document.getElementById('open-search');
  openSearch.addEventListener('click', function () {
    openSearch.classList.toggle('active');
    document.querySelector('.header__search').classList.toggle('active');
  });

  if (document.querySelectorAll(".mask").length) {
    Inputmask().mask(document.querySelectorAll(".mask"));
  }

  $('.search-input input').on('focus', function () {
    $(this).closest('.search-input').addClass('focus');
  });
  $('.search-input input').on('blur', function () {
    $(this).closest('.search-input').removeClass('focus');
  });
  $(".js-selectize").selectize({
    persist: true,
    onDropdownOpen: function onDropdownOpen() {
      var value = this.getValue();
      this.clear();
      this.$control_input.val(value);
    }
  });
  $('.filter__title').on('click', function () {
    if ($(window).width() < 992) {
      $(this).toggleClass('active');
      $('.filter__content').slideToggle();
    }
  });
  $('.exp-profile__rate').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.exp-profile__rate .tooltips').on('mouseleave', function () {
    $(this).closest('.exp-profile__rate').removeClass('active');
  });
  $('.exp-profile__tabs__nav li').on('click', function () {
    var index = $(this).index();
    $('.exp-profile__tabs__nav li').removeClass('active');
    $(this).addClass('active');
    $('.exp-profile__tabs__content').removeClass('active');
    $('.exp-profile__tabs__content').eq(index).addClass('active');
  });
  $('.tabs-nav a').on('click', function () {
    if (!$(this).hasClass('active')) {
      $(this).closest('.tabs-nav').find('a').removeClass('active');
      $(this).addClass('active');
      var itemIndex = $(this).attr('data-tabs-item');
      var tabsId = $(this).closest('.tabs-nav').attr('data-tabs');
      changeTabs(tabsId, itemIndex);
    }
  });

  function changeTabs(tabsid, itemIndex) {
    $(tabsid).find('.tabs__item').hide();
    $(tabsid).find('.tabs__item').eq(itemIndex).fadeIn(300);
  }

  $('#inputfile').on('change', function () {
    var file = $("#inputfile")[0].files[0];
    $(this).closest('.app__file').addClass('active');
    $('#filename').text(file.name);
  });
  $('.app__file').on('dragover', function () {
    $(this).addClass('hover');
  });
  $('.app__file').on('dragleave', function () {
    $(this).removeClass('hover');
  });
  $('.upload-wrap__col input').on('change', function () {
    var file = $(this)[0].files[0];
    $(this).closest('.upload-wrap__col').addClass('upload');
    $(this).closest('.upload-wrap__col').find('.upload-wrap__text--file').text(file.name);
  });
  $('.upload-wrap__col').on('dragover', function () {
    $(this).addClass('hover');
  });
  $('.upload-wrap__col').on('dragleave', function () {
    $(this).removeClass('hover');
  });
  $('.upload-wrap__col .upload-wrap__col__button').on('click', function () {
    $(this).closest('.upload-wrap__col').removeClass('upload').find('input').val(null);
  });
  $('.exp-modal__file input').on('change', function (evt) {
    var $parent = $(this).closest('.exp-modal__file');
    $parent.addClass('upload');
  });
  $('#selectChangePhoto').on('click', function () {
    $(this).toggleClass('select-arrow-active');
    $(this).next('.select-items--about').toggleClass('select-hide--about');
  });
  $(document).mouseup(function (e) {
    var container = $(".custom-select--about");

    if (container.has(e.target).length === 0) {
      $('#selectChangePhoto').removeClass('select-arrow-active');
      $('#selectChangePhoto').next('.select-items--about').addClass('select-hide--about');
    }
  });
  $('.form-check-input__another').on('change', function () {
    $('#form-check-input__another').fadeToggle(200);
  });
});
//# sourceMappingURL=main.js.map
