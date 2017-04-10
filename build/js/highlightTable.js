var highlightTable = function() {
	var tds,
	   	index,
	   	sel_tds;

	$("#jobs-table td").click(function() {
	    tds = $(this).parent().find("td"),
	    index = $.inArray( this, tds ),
	    sel_tds = $("#jobs-table td:nth-child("+( index + 1 )+")");

			$(".jobs-table-hight-column").remove();
			
			var heightColumn = 0,
			widthColumn = 0,
			leftColumn = 0,
			topColumn = 0;

			heightColumn = $("#jobs-table").height();
	    widthColumn = $(sel_tds[0]).width();
	    leftColumn = $(sel_tds[0]).offset().left;
	    topColumn = $(sel_tds[0]).offset().top;

			$("body").append('<div class="jobs-table-hight-column">!!</div>');

			$(".jobs-table-hight-column").height(heightColumn-2);
			$(".jobs-table-hight-column").width(widthColumn + 31);
			$(".jobs-table-hight-column").css({'left': leftColumn + 'px'});			
			$(".jobs-table-hight-column").css({'top': topColumn + 'px'});			
	});


};




