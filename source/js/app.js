'use strict';

$(document).ready(function() {

		$('#datetimepicker1').datepicker({});
		$('#datetimepicker2').datepicker({});
		$('#datetimepicker3').datepicker({});
		$('#datetimepicker4').datepicker({});
		searchOpen();
		sliderGo();
  	sliderNewsGo();
		highlightTable();
		inputClean();

		$("#birthdays-slider").slider({
			formatter: function(value) {
				return value;
			}
		});
});

