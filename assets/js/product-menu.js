jQuery(document).ready(function () {
	let currentPage = '1';
	const productPageSize = '8';
	let productCount = jQuery('.all-products').children('div').length;
	let totalPages = Math.ceil(productCount / productPageSize);

	for (let index = 1; index <= totalPages; index++) {
		jQuery('.pagination').append(
			`<li class="page-item"><a class="page-link" href="#">${index}</a></li>`
		);
	}

	jQuery('.pagination')
		.children('li')
		.first()
		.children('a')
		.addClass('active-link');

	jQuery('.category-list li a').click(function (event) {
		// fetch the class of the clicked item
		let ourClass = $(event.target).attr('class');

		if (jQuery(event.target).parent().hasClass('active')) {
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
			productCount = jQuery('.all-products').children('div').length;
			totalPages = Math.ceil(productCount / productPageSize);
		} else {
			// hide all elements that don't share ourClass
			jQuery('.all-products')
				.children('div:not(.' + ourClass + ')')
				.hide();
			// show all elements that do share ourClass
			jQuery('.all-products')
				.children('div.' + ourClass)
				.show();

			productCount = jQuery('.all-products').children('div:visible').length;
			totalPages = Math.ceil(productCount / productPageSize);
		}

		console.log(productCount, totalPages, productCount / productPageSize);

		jQuery('.pagination').empty();

		for (let index = 1; index <= totalPages; index++) {
			jQuery('.pagination').append(
				`<li class="page-item"><a class="page-link" href="#">${index}</a></li>`
			);
		}

		jQuery('.pagination')
			.children('li')
			.first()
			.children('a')
			.addClass('active-link');

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

	jQuery('.products-bottom .pagination li a').click(function (event) {
		jQuery('.products-bottom .pagination li a').removeClass('active-link');
		jQuery(event.target).addClass('active-link');
		currentPage = jQuery(event.target).text();
	});
});

$(function () {
	var parent = $('.all-products');
	var divs = parent.children();
	while (divs.length) {
		parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
	}
});
