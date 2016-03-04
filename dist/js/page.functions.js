/**
 * Functionality specific to inner pages.
 *
 */

( function( $ ) {
"use strict";
	
	if ($('a.magnify').length || $('.full-size-link a').length){
		//Lightbox pop-up for image links
		$('a.magnify, .full-size-link a').magnificPopup({gallery: {
			enabled: true
    	},type:'image'});
    }
	
	//Bootstrap class for submit button
	$(".form-submit #submit").addClass("btn btn-default btn-icon");

	//Bootstrap classes for submenus of submenus
	$('#main-navbar li li:has(ul)').addClass('dropdown-submenu');
	$('#main-nav ul.children').addClass('dropdown-menu');
	$('#main-nav li.page_item_has_children').addClass('dropdown');

	//bxslider settings
	var chevron_right = '<i class="fa fa-chevron-right"></i>';
	var chevron_left = '<i class="fa fa-chevron-left"></i>';
	
	if ($('.portfolio_item-widget').length){
		var portwidgetslider = $('.portfolio_item-widget').bxSlider({
			minSlides: 1,
   			nextText:chevron_right,
   			prevText:chevron_left
		});
	}
	
	if ($('#portslider').length){
		var singleportslider = $('#portslider').bxSlider({
			pagerCustom:'#pager',
   		 	nextText:chevron_right,
   	 		prevText:chevron_left,
     		hideControlOnEnd:true
		});
	}
	
	if ($('.recent-item-list').length){
		var relatedprojectslider = $('.recent-item-list').bxSlider({
    		nextText:chevron_right,
    		prevText:chevron_left,
    		infiniteLoop: false,
			minSlides: 1,
			slideWidth: 300,
    		maxSlides: 5,
    		slideMargin: 16,
    		pager:false
		});
	}
	
	//Add Bootstrap classes to single portfolio page slider	
	$('.single-portfolio_item .has_no_title .bx-controls-direction, .single-portfolio-slider .bx-controls-direction').addClass('btn-group-expand');
	//Add Bootstrap classes to bxslider next/prev buttons	
	$('.bx-next, .bx-prev').addClass('btn btn-default');
	//Add Bootstrap classes to recent post widget		
	$('.bx-controls-direction').addClass('btn-group');
		
	//Add tooltip to showall buttons
	var iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );
	if (!iOS) {
	$('.link, #portfolio-cat-filter a').tooltip();
	}
	
} )( jQuery );

//on window load
jQuery(window).load(function() {
	if (jQuery('.equalheight').length){
	//add equalheights to sidebar and content area
	jQuery('.equalheight').equalHeightColumns();
	}
	
	if (jQuery('.image-height').length){
	//add equalheights to about page image and description div
	jQuery('.image-height').equalHeightColumns();
	}
});