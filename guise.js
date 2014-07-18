

window.guise = {

	init : function(num){
		var $ul = $('.hotimglist ul');		

		for(var i = 0; i < 72; i++){
			
			if (i == 0){
				var li = '<li class="start touchli" p="start" id=li_' + i +'><img src="images/' + num + i + '.jpg" alt="" /></li>';
			}else if (i == 71){
				var li = '<li class="end touchli" p="end" id=li_'+ i +'><img src="images/' + num + i + '.jpg" alt="" /></li>';
			}else{
				var li = '<li class="touchli" id=li_'+ i +'><img src="images/' + num + i + '.jpg" alt="" /></li>';
			}

			$ul.append(li);
		}	

		window.ul = $ul ; 
		window.thisLi = 'thefirst' ;	
		window.nowIntervalId ;

		guise.autoScrollRight();
		guise.touchmove();
	},

 isShow : function(index){
		if ( (index >= 1455210155200 && index <=14552101552071) ) {					
			guise.showInfo('.info-container1');
		}else{
			guise.hiddenInfo('.info-container1');
		}
	},

	showInfo : function (info){											
		$(info).fadeIn(200);

	},

	hiddenInfo : function (info){
		$(info).fadeOut(10);
	},


	scrollRight : function(){
		// scroll right
		if (thisLi == 'thefirst'){					
			thisLi = $(ul).find('li#li_0');	
		}				
		
		var nowImgIndex = parseInt($(thisLi).find('img').attr('src').split('.')[0].split('/')[1]);
		
		guise.isShow(nowImgIndex);		

		$(thisLi).hide();
		var nextLi = $(thisLi).next('li');
		if($(thisLi).attr('p') == 'end'){					
			nextLi = $('ul li.start');
		}				

		$(nextLi).show();				

		thisLi = $(nextLi);		
	},

	scrollLeft : function(){
		// scroll left
		if (thisLi == 'thefirst'){					
			thisLi = $(ul).find('li#li_0');	
		}				
		
		var nowImgIndex = parseInt($(thisLi).find('img').attr('src').split('.')[0].split('/')[1]);
		
		guise.isShow(nowImgIndex);							

		$(thisLi).hide();
		var nextLi = $(thisLi).prev('li');
		if($(thisLi).attr('p') == 'start'){					
			nextLi = $('ul li.end');
		}				

		$(nextLi).show();				

		thisLi = $(nextLi);								
	},

	autoScrollRight : function() {		
		nowIntervalId = setInterval(function(){				
			guise.scrollRight();	
		}, 50);	
	},

	autoLeft : function() {		
		nowIntervalId = setInterval(function(){				
			guise.scrollLeft();	
		}, 50);	
	},

	touchmove : function (){			
		$(".touchli").touchInit({
	    preventDefault: true,
	    mouse: true,
	    pen: true,
	    maxtouch: -1,
	    prefix: ""
		});

		var start_handler = function (event) {		
				clearInterval(nowIntervalId);    
		    startX = event.clientX;		    
		};

		var move_handler = function (event) {												
			if (startX - event.clientX > 0){				
				guise.scrollRight();							
			}else{
				guise.scrollLeft();
		  }
		};

		var end_handler = function (event) {};

		$("#touchul").on("touch_start", start_handler);
		$("#touchul").on("touch_move", 	move_handler);
		$("#touchul").on("touch_end", end_handler);		
	},

}

$(function() {
	guise.init('145521015520');
})

