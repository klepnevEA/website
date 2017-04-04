var sliderGo = function() {

	var moveSlide = function (container, slideNum) {
		var
			items = container.find('.slider__text-elem'),
			activeItem = items.filter('.active'),
			reqItem = items.eq(slideNum),
			reqIndex = reqItem.index(),
			list = container.find('.slider__text-list'),
			duration = 1000;

		var itemsBg = container.find('.slider__elem'),
			activeItemBg = itemsBg.filter('.active'),
			reqItemBg = itemsBg.eq(slideNum),
			reqIndexBg = reqItemBg.index(),
			listBg = container.find('.slider__list');

		if (reqItemBg.length) {
			list.stop(true, true).animate({
				'left' : -reqIndex * 100 + '%'
			}, duration, function () {
				activeItem.removeClass('active');
				reqItem.addClass('active');
			}),

			listBg.stop(true, true).animate({
				'left' : -reqIndexBg * 100 + '%'
			}, duration*2, function () {
				activeItemBg.removeClass('active');
				reqItemBg.addClass('active');
			})			
		}
	}	


	$('.slider__nav').on('click', function(e){
	    e.preventDefault();
		
		var $this = $(this),
			container = $this.closest('.slider'),
			items = container.find('.slider__text-elem'),
			activeItem = items.filter('.active'),
			nextItem = activeItem.next(),
			prevItem = activeItem.prev();
			
		var itemsBg = container.find('.slider__elem'),
			activeItemBg = itemsBg.filter('.active');

		if ($this.hasClass('slider__nav-right')){ // листаем вперед

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




