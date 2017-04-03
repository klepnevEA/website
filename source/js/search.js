var searchOpen = function() {
	
  var searchTop = $('.search-top'),
  		searchInput = $('#search-top'),
  		searchClose = $('#search-close'),
  		searchOpen = $('#seach-open');

  var openCloseSearch = function() {
  	searchTop.toggleClass('active');
  	searchInput.val('Введите вопрос');
  }

  var clearSearch = function() {
  	if(searchInput.val() === 'Введите вопрос') {
  		searchInput.val('');
  	}
  }  		

 	searchOpen.on('click', openCloseSearch);
 	searchClose.on('click', openCloseSearch);

 	/*очистка поля для ввода текста*/

 	searchInput.on('click', clearSearch);


};

module.exports = { 
  search: searchOpen
};




