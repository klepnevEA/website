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
			leftColumn = 0;

			heightColumn = $("#jobs-table").height();
	    widthColumn = $(sel_tds[0]).width();
	    leftColumn = $(sel_tds[0]).position().left;

			$('<div class="jobs-table-hight-column">.</div>').appendTo("#jobs-table");
			//$().append();

			$(".jobs-table-hight-column").height(heightColumn);
			$(".jobs-table-hight-column").width(widthColumn + 32);
			$(".jobs-table-hight-column").css({'left': leftColumn + 'px'});			

	});


};




