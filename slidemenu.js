
function slideMenu() {
  
  // check for window width
	var winW = $(window).width();
	// define sub-menu element
	var subMenuEl = 'ul.sub-menu';
	// if menu is open
	var menuIsOpen = false;
	// set a timer so it doesn't execute on quick mouse-over
	var timer;

	function openSubMenu(el) {
		// $(this) now points to current .menu-item-has-children instead of header
		var subMenu = $(el).find(subMenuEl);
		// define a left margin so we can center the submenu
		var mLeft = $(el).width() / 2;	  		
		// set the menu Open 
		menuIsOpen = true;		  	

		// set the time so that this doesn't run on quick mouse-over (which is really annoying)
		timer = setTimeout(function () {
			// check if .menu-filler already exists
  		if($(".menu-filler").length == 0) {
	  		// insert an empty div outside the nav (because of hover-states)
	  		$("header").append("<div class='menu-filler'></div>");
	  		// animate it (make transition smooth, add a delay because a real quick hover should not active menu)
	  		$(".menu-filler").stop(true,true).slideDown(300);
		  }
  		// position submenu and animate it.
  		subMenu.css("margin-left", mLeft).stop(true,true).delay(100).fadeIn(300);

  	}, 200);
	}

	function closeSubMenu(el) {
		 // make sure menuIsOpen is false
		menuIsOpen = false;		  	
		// define submenu again
		var subMenu = $(el).find(subMenuEl);	
		// hide submenu
		subMenu.stop(true,true).fadeOut(300);		
		
		// hide menu-filler and remove it
		setTimeout(function() {					
			if(!menuIsOpen){
				$(".menu-filler").stop( true, true ).slideUp(300, function() {
					$(this).remove();
				});
			}	  	
		}, 300);		

		// don't forget to clear the timer
		clearTimeout(timer);
	}

	// Only execute if the screen is wider than 767px
  if (winW > 767) {
  	// on mouseenter on header but use different selector for use in function
		$('header').on('mouseenter', '.menu-item-has-children', function() {
			openSubMenu(this);			
		}).on('mouseleave', '.menu-item-has-children', function() {							
			closeSubMenu(this);
		});
	}
	
}

