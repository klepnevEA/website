'use strict';

$(document).ready(function() {

		$('#datetimepicker1').datepicker({});
		$('#datetimepicker2').datepicker({});
		searchOpen();
		sliderGo();
  	sliderNewsGo();
		highlightTable();
		$("#birthdays-slider").slider({
			formatter: function(value) {
				return value;
			}
		});
});

