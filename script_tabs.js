$(function(){
  $('.tab-nav li:first').addClass('select');                  // Первой вкладке добавляетсякласс select
  $('.tab-panels-1>div').hide().filter(':first').show(); 
  $('.tab-panels-2>div').hide().filter(':first').show();      // Скрываются все блоки с описанием вкладок кроме первого
  	$('.tab-nav a').click(function(){                         // При клике на вкладку
    $('.tab-panels-1>div').hide().filter(this.hash).show();
    $('.tab-panels-2>div').hide().filter(this.hash).show();   // - показывается блок с описанием текущей вкладки
    $('.tab-nav li').removeClass('select');                   // - удаляется класс 'select' у активной ранее вкладки
    $(this).parent().addClass('select');                      // - добавляется класс 'select' для выбранной вкладки
    return (false);                                           // - прерывается обработка события onClick
  })
})