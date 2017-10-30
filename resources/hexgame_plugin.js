(function($) {
	//what should I expect from this function? initialize everything?
	$.fn.hexed = function( options ) {
		var settings= $.extend({
			//default values
			difficulty: 5,
			turns: 10
		}, options);
		//console.log($(this).id);
		if ($(this).attr('id')=="difficulty"){
			$(this[0]).each(function(index){
				$(this)[index].selected=false;
			});
			$(this)[0][settings.difficulty].selected=true;
		}
		else if ($(this).attr('id')=="turns") {
			$(this[0]).each(function(index){
				$(this)[index].selected=false;
			});
			$(this)[0][settings.turns-1].selected=true;
		};
		return this;
	
	};
	
	//find the error of each color; options should be expected and actual value
	/*$.fn.error = function(options) {
		var errors = $.extend({
			expected: 0,
			actual: 0
		},options);
		
		return Math.round(Math.abs(errors.expected - errors.actual)/255.0*100,2);
	};*/
	
	$.fn.hexImage = function(options) {
		var color = $.extend({ 
			red: Math.round(Math.random()*250),
			green: Math.round(Math.random()*250),
			blue: Math.round(Math.random()*250)
		},options);
		
		return this.css({		
			backgroundColor: "rgb("+color.red+','+color.green+','+color.blue+')'
		});
	};
}(jQuery));