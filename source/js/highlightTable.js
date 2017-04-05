var highlightTable = function() {
	    var tds,
	    index,
	    sel_tds;

	$("#jobs-table td").mouseover(function() {
	    tds = $(this).parent().find("td"),
	    index = $.inArray( this, tds ),
	    sel_tds = $("#jobs-table td:nth-child("+( index + 1 )+")");

			var heightColumn = 0,
			widthColumn = 0,
			topColumn = 0,
			leftColumn = 0;
	    for(var i = 0; i< sel_tds.length; i++) {
	    	heightColumn = heightColumn + $(sel_tds[i]).height();
	    }

	    widthColumn = $(sel_tds[0]).width();
	    leftColumn = $(sel_tds[0]).position().left;


			$("#jobs-table").append('<div class="jobs-table-hight-column"></div>');

			$(".jobs-table-hight-column").height(heightColumn + 32);
			$(".jobs-table-hight-column").width(widthColumn + 32);
			$(".jobs-table-hight-column").css({'left': leftColumn + 'px'});			

	}).mouseout(function() {
			$(".jobs-table-hight-column").remove()
	});

};




