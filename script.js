$(function() {
    // Init Controller
    var scrollMagicController = new ScrollMagic(); 

})

/*var tween = TweenMax.to("#animation", 1.2, {
	rotation:15, 
	ease:Elastic.easeOut
});*/



 $(window).scroll(function(){	/*Bind an event listener to the event “scroll"*/
		 var distance = $(window).scrollTop(); /*calculates the distance the user has scrolled from the top; VERY HELPFUL*/
		 console.log('distance = '  + distance); /*Used for debugging. You can view the console in Chrome via Inspect Element*/
		if(distance > 270) {
			/*start the animation...*/
			console.log('start animation');
			var tween = TweenMax.to("#animation", 2.2, {
				rotation:15, 
				ease:Elastic.easeOut
			});
		}
				if(distance > 320) {
			/*start the animation...*/
			console.log('start animation');
			var tween = TweenMax.to("#bageltext", 2.2, {
				rotation:-5, 
				ease:Elastic.easeOut
			});
		}
});

/*var scene = new ScrollScene({
    triggerElement: '.header',
    offset: 50 /* offset the trigger 100px below #scene's top */
/*})

.setTween(tween)
.addTo(scrollMagicController);*/

