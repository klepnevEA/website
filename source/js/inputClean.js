var inputClean = function() {

  $('input').on('click', function(){

        if($(this).val() !== '') {
          $(this).val('');
        };
  });

  $('input').on('blur', function(){

    var that = $(this),
        thisVal = that.data('value-text');

        if(that.val() === '') {
          that.val(thisVal);
        };
  });

};