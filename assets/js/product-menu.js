jQuery(document).ready(function () {
	jQuery('.category-list li a').click(function (event) {
		// fetch the class of the clicked item
		let ourClass = $(event.target).attr('class');

		if (jQuery('.category-list li').hasClass('active')) {
			jQuery('.category-list li').removeClass('active');
			ourClass = 'none';
		} else {
			// reset the active class on all the buttons
			jQuery('.category-list li').removeClass('active');
			// update the active state on our clicked button
			jQuery(this).parent().addClass('active');
		}

		if (ourClass == 'primary-category') {
			// show all our items
			jQuery('.all-products').children('div.primary-category').show();
		} else if (ourClass == 'none') {
			jQuery('.all-products').children('div').show();
			jQuery('.all-products').children('div:nth-child(n + 9)').hide();
		} else {
			// hide all elements that don't share ourClass
			jQuery('.all-products')
				.children('div:not(.' + ourClass + ')')
				.hide();
			// show all elements that do share ourClass
			jQuery('.all-products')
				.children('div.' + ourClass)
				.show();
		}
		return false;
	});

	jQuery('.products-bottom .sweep-btn').click(function (event) {
		jQuery(event.target).toggleClass('active');
		jQuery('.category-list li').removeClass('active');
		if (jQuery(event.target).hasClass('active')) {
			jQuery('.all-products').children('div').show();
		} else {
			jQuery('.all-products').children('div:nth-child(n + 9)').hide();
		}
	});
});

$(function () {
	var parent = $('.all-products');
	var divs = parent.children();
	while (divs.length) {
		parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
	}
});
