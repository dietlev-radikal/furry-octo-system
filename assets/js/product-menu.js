  jQuery(document).ready(function() {
  jQuery('.category-list li a').click(function(event) {
    // fetch the class of the clicked item
    const ourClass = $(event.target).attr('class');

    console.log(ourClass);

    // reset the active class on all the buttons
    jQuery('.category-list li').removeClass('active');
    // update the active state on our clicked button
    jQuery(this).parent().addClass('active');
  

    if(ourClass == 'primary-category') {
      // show all our items
      jQuery('.all-products').children('div.primary-category').show();

    }
    else {
      // hide all elements that don't share ourClass
      jQuery('.all-products').children('div:not(.' + ourClass + ')').hide();
      // show all elements that do share ourClass
      jQuery('.all-products').children('div.' + ourClass).show();
    }
    return false;
  });

});

$(function () {
    var parent = $(".all-products");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
});