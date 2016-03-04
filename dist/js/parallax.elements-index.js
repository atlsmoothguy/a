var responsive = 1;
var transitionSpeed = 2500;

var items =[];

//GENERALES//
var item = {};
item.name = "#piso1";
item.stackOrder = 300;
item.content = "image";
item.image = "images/parallax/piso.png";
item.sizes = {w:"2486",h:"398"};
item.screenPos = ["0%","0%","0%","0%","0%","0%","0%","0%"];
item.visibility = ["true","true","true","true","true","true","true","true"];
item.parallaxScene = true;
item.bPos = -300;
item.mouseSpeed = 1;
items.push(item);


//ESCENA 1//
	
//Parallax Element 	
var item = {};
item.name = "#escena1-parallax1";
item.stackOrder = 250;
item.content = "image";
item.image ="images/landing/parallax/1.png";
item.sizes = {w:"1192",h:"290"};
item.screenPos = ["-10%","-150%","-250%","-350%","-450%","-550","-650%","-750%"];
item.visibility = ["true","true","true","true","true","true","true","true"];
item.parallaxScene = true;
item.bPos = 10;
item.mouseSpeed = 10;
items.push(item);





var item = {};
item.name = "#inicio";
item.stackOrder = 304;
item.content = "html";
item.screenPos = ["center","-150%","-250%","-350%","-450%","-550%","-650%"];
item.offsetV = 0
item.visibility = ["true","true","true","true","true","true","true"];
items.push(item);


var HORILLAX = {};

(function($) {
//Check of url has a query
$.QueryString = (function(a) {
		if (a == "") return {};
        var b = {};
        for (var i = 0; i < a.length; ++i)
        {
            var p=a[i].split('=');
            if (p.length != 2) continue;
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    })(window.location.search.substr(1).split('&'))
    
})(jQuery);

if( $.isNumeric($.QueryString["page"])){
	var pagemove = $.QueryString["page"];
}
else{
	var pagemove = 0;
}




//Start Animating
jQuery(document).ready(function($) {
	window.total_num_pages = $("div.parallax-page").length;
	$(".nano").nanoScroller({ alwaysVisible: true });
	this.ANIM = new HORILLAX.ANIM();
	HORILLAX.ANIM.instance.move(pagemove);
	
	function appNavigateWithTo (with_element, to_section) {
 $("." + with_element).on('click touchstart', function(e){
   HORILLAX.ANIM.instance.move(parseInt(to_section) - 1);
   return false;
 })
}
appNavigateWithTo('app_go-to-1', 1);
appNavigateWithTo('app_go-to-2', 2);
appNavigateWithTo('app_go-to-3', 3);
appNavigateWithTo('app_go-to-5', 5);
appNavigateWithTo('app_go-to-4', 4);
appNavigateWithTo('app_go-to-6', 6);
appNavigateWithTo('app_go-to-7', 7);

	
});




