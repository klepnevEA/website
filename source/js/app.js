'use strict';


$(document).ready(function() {
		new SimpleBar(document.getElementById('#birsdays'), { autoHide: true });
});


var simplebar = require('./simplebar');
var searchOpen = require('./search');
var sliderGo = require('./slider');
var sliderNewsGo = require('./sliderNews');

simplebar.simplebar();
searchOpen.search();
sliderGo.slider();
sliderNewsGo.sliderNews();