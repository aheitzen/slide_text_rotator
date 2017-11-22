var myArray = ['I MARCH FOR EQUALITY','1968 IS CALLING, DO NOT ANSWER.','OUR RIGHTS ARE NOT UP FOR GRABS.','MAKE AMERICA SANE AGAIN.', 'TRANS LIVES MATTER.', 'KEEP YOUR HANDS OFF MY RIGHTS.', 'WE ARE ALL IMMIGRANTS.', 'DISSENT IS PATRIOTIC.' ];
var currentIndex = 0;
var selector = $('#selector');
var timer = setInterval(function(){

	
	selector.animate({left: '-100%'}, 700, function () { 
	    selector.hide();
	    selector.html(myArray[currentIndex]);
	    selector.css({left: '100%'});
	    selector.show();
	    selector.animate({left: '0'}, 700);
	});
	currentIndex++;
	if (currentIndex == myArray.length) {
		currentIndex = 0;
	}
 }, 7000);