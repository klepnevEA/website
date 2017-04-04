var sliderNewsGo = function() {

	var moveSlide = function (container, slideNum) {
		var
			items = container.find('.photoreports__elem'),
			activeItem = items.filter('.active'),
			reqItem = items.eq(slideNum),
			reqIndex = reqItem.index(),
			list = container.find('.photoreports__list'),
			duration = 1000;

		if (reqItem.length) {
			list.stop(true, true).animate({
				'left' : -reqIndex * 100 + '%'
			}, duration, function () {
				activeItem.removeClass('active');
				reqItem.addClass('active');
			})
		}
	}	


	$('.photoreports__description-nav-btn').on('click', function(e){
	    e.preventDefault();
		
		var $this = $(this),
			container = $this.closest('.photoreports'),
			items = container.find('.photoreports__elem'),
			activeItem = items.filter('.active'),
			nextItem = activeItem.next(),
			prevItem = activeItem.prev();

		if ($this.hasClass('photoreports__description-nav-right')){ // листаем вперед
			if (nextItem.length) {
				moveSlide(container, nextItem.index());
			} else {
				moveSlide(container, 0);
			}
		} else { // листаем назад
			if (prevItem.length) {
				moveSlide(container, prevItem.index());
			} else {
				moveSlide(container, items.length - 1); // потому что length считает с 1, а eq считает с 0
			}
		}
	});


};





