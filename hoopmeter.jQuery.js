/*! Hoopmeter v1.0.0 | (c) QalbIT Solutions | qalbit.com */
jQuery.fn.hoopmeter = function(arg) {
	var initTime = arg.timer || 50;

	var initCounter1 = 0,
		initCounter2 = 0,
		initCounter3 = 0,
		initCounter4 = 0;

	var timer1 = 1001,
		timer2 = 1002,
		timer3 = 1003,
		timer4 = 1004;

	var hoopmeterComponentValue1 = parseInt($("#hoopmeter-component-1").text(), 10) || 0,
		hoopmeterComponentValue2 = parseInt($("#hoopmeter-component-2").text(), 10) || 0,
		hoopmeterComponentValue3 = parseInt($("#hoopmeter-component-3").text(), 10) || 0,
		hoopmeterComponentValue4 = parseInt($("#hoopmeter-component-4").text(), 10) || 0;

	var maxValue = Math.max(hoopmeterComponentValue1, hoopmeterComponentValue2, hoopmeterComponentValue3, hoopmeterComponentValue4);
	var timeMaxMillies = maxValue * initTime;

	var maxTimeout1 = timeMaxMillies / hoopmeterComponentValue1,
		maxTimeout2 = timeMaxMillies / hoopmeterComponentValue2,
		maxTimeout3 = timeMaxMillies / hoopmeterComponentValue3,
		maxTimeout4 = timeMaxMillies / hoopmeterComponentValue4;

	var isCallRequired = true;
	$(window).on('scroll',function() {
		if(isCallRequired) {
			if (checkVisible($('#hoopmeter-group'))) {
		        doPerformHoopmeter();
		    }
		}
	});
	function doPerformHoopmeter() {
		isCallRequired = false;

		/* Set Initial values for hoopmeterComponent */
		$("#hoopmeter-component-1").text(initCounter1);
		$("#hoopmeter-component-2").text(initCounter2);
		$("#hoopmeter-component-3").text(initCounter3);
		$("#hoopmeter-component-4").text(initCounter4);

		/* Clear all Interval first */
		clearInterval(timer1);
		clearInterval(timer2);
		clearInterval(timer3);
		clearInterval(timer4);
	
		/* Start all Interval and update values */
		timer1 = setInterval(function() {
			var currentValue1 = $("#hoopmeter-component-1").text();
			currentValue1 = parseInt(currentValue1, 10) || 0;

			if(currentValue1 < hoopmeterComponentValue1) {
				$("#hoopmeter-component-1").text(currentValue1 + 1);
			} else {
				clearInterval(timer1);
			}
		}, maxTimeout1);
		timer2 = setInterval(function() {
			var currentValue2 = $("#hoopmeter-component-2").text();
			currentValue2 = parseInt(currentValue2, 10) || 0;

			if(currentValue2 < hoopmeterComponentValue2) {
				$("#hoopmeter-component-2").text(currentValue2 + 1);
			} else {
				clearInterval(timer2);
			}
		}, maxTimeout2);
		timer3 = setInterval(function() {
			var currentValue3 = $("#hoopmeter-component-3").text();
			currentValue3 = parseInt(currentValue3, 10) || 0;

			if(currentValue3 < hoopmeterComponentValue3) {
				$("#hoopmeter-component-3").text(currentValue3 + 1);
			} else {
				clearInterval(timer3);
			}
		}, maxTimeout3);
		timer4 = setInterval(function() {
			var currentValue4 = $("#hoopmeter-component-4").text();
			currentValue4 = parseInt(currentValue4, 10) || 0;

			if(currentValue4 < hoopmeterComponentValue4) {
				$("#hoopmeter-component-4").text(currentValue4 + 1);
			} else {
				clearInterval(timer4);
			}
		}, maxTimeout4);
	}

	function checkVisible( elm, eval ) {
	    eval = eval || "object visible";
	    var viewportHeight = $(window).height(),
	        scrolltop = $(window).scrollTop(),
	        y = $(elm).offset().top,
	        elementHeight = $(elm).height();   

	    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
	    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
	}

};