var inputClean = function() {

  $('.input').on('click', function(){
          $(this).val('');
  });

  $('.input').on('blur', function(){

    var that = $(this),
        thisVal = that.data('value-text');

        if(that.val() === '') {
          that.val(thisVal);
          that.css('color', '#97a4b1')
        };
  });

  $('.input').on('input', function(){
        if($(this).val() !== '') {
          $(this).css('color', '#000')
        };
  });


  $('.input__datapicker').on('blur', function() {
    $(this).css('color', '#000')       
  });

  $('.dropdown-menu a').on('click', function() {
    $(this).parent().parent().siblings('button').css('color', '#000'); 
    $(this).parent().parent().siblings('button').text($(this).text());   
  });


};





