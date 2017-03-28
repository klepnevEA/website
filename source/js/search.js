var searchOpen = function() {
	
  var searchTop = $('.search-top'),
  		searchClose = $('#search-close'),
  		searchOpen = $('#seach-open');

  var openCloseSearch = function() {
  	searchTop.toggleClass('active');
  }  		

 	searchOpen.on('click', openCloseSearch);
 	searchClose.on('click', openCloseSearch);


};

module.exports = { 
  search: searchOpen
};




