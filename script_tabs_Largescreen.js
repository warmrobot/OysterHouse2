if ($(window).width() > 1023) {
  
      $(function(ourproductsLargescreen){
          $('.ourproducts-flexbox__nav li:first').addClass('select');               // Первой вкладке добавляется класс select
          $('.ourproducts-flexbox__col1>div').hide().filter(':first').show(); 
          $('.ourproducts-flexbox__col3>div').hide().filter(':first').show();       // Скрываются все блоки с описанием вкладок кроме первого
            $('.ourproducts-flexbox__nav a').click(function(){                      // При клике на вкладку
              $('.ourproducts-flexbox__col1>div').hide().filter(this.hash).show();
              $('.ourproducts-flexbox__col3>div').hide().filter(this.hash).show();  // - показывается блок с описанием текущей вкладки
              $('.ourproducts-flexbox__nav li').removeClass('select');              // - удаляется класс 'select' у активной ранее вкладки
              $(this).parent().addClass('select');                                  // - добавляется класс 'select' для выбранной вкладки
          return (false);                                                         // - прерывается обработка события onClick
          });
      });
       }