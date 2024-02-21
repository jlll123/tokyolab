// $('.letter').each(function(i){
// 	$(this).css('animation-duration', 1 - i/10 + 's')
// })

var oVal = {
	numOfDiv: 25,
	letter: '%',
	timing: 1,
	delay: 10,
	animStyle: 1
}

const inputYourText = document.querySelector("#your-text"),
			inputMainBgColor = document.querySelector('#main-bg-color'),
			inputLetterBgColor = document.querySelector('#letter-bg-color'),
			inputLetterColor = document.querySelector('#letter-color'),
			inputLetterBorderColor = document.querySelector('#letter-border-color'),
			inputLetterBorderWidth = document.querySelector('#letter-border-width'),
			inputBlendMode = document.querySelector('#blend-mode'),
			inputFontSize = document.querySelector('#font-size'),
			inputRadius = document.querySelector('#radius'),
			inputPerspective =  document.querySelector('#perspective'),
			inputBlur = document.querySelector('#blur'),
			inputContrast = document.querySelector('#contrast'),
			inputAnimEasing = document.querySelector('#anim-easing'),
			inputTiming = document.querySelector('#timing'),
			inputDelay = document.querySelector('#delay'),
			inputDivision = document.querySelector('#division'),
			buttonPausePlay = document.querySelector('#pause-play'),
			inputAnimDirection = document.querySelector('#anim-direction'),
			inputAnimStyle = document.querySelectorAll('.anim-style'),
			inputMouseMove = document.querySelector('#mouse-move');
			
const	inputFromScaleX = document.querySelector('#from-scale-x'),
			inputFromScaleY = document.querySelector('#from-scale-y'),
			inputFromRotate = document.querySelector('#from-rotate'),
			inputFromRotateX = document.querySelector('#from-rotate-x'),
			inputFromRotateY = document.querySelector('#from-rotate-y'),
			inputFromSkewX = document.querySelector('#from-skew-x'),
			inputFromSkewY = document.querySelector('#from-skew-y'),
			inputFromTranslateX = document.querySelector('#from-translate-x'),
			inputFromTranslateY = document.querySelector('#from-translate-y');
			
const	inputToScaleX = document.querySelector('#to-scale-x'),
			inputToScaleY = document.querySelector('#to-scale-y'),
			inputToRotate = document.querySelector('#to-rotate'),
			inputToRotateX = document.querySelector('#to-rotate-x'),
			inputToRotateY = document.querySelector('#to-rotate-y'),
			inputToSkewX = document.querySelector('#to-skew-x'),
			inputToSkewY = document.querySelector('#to-skew-y'),
			inputToTranslateX = document.querySelector('#to-translate-x'),
			inputToTranslateY = document.querySelector('#to-translate-y');

var main = $('#main');

///// FONT /////

var GFontApiKey = 'AIzaSyBRUDgk2xFItCoqwgNK33D1i-IKqDjGXag',
		GFontUrl = 'https://www.googleapis.com/webfonts/v1/webfonts?key=',
		GFontEndPoint = GFontUrl + GFontApiKey;

$.getJSON( GFontEndPoint, function( data ) {
  var items = [];
  $.each( data.items, function( key, val ) {
    items.push( "<option value='" + val.family + "'>" + val.family + "</option>" );
  });
 
  $( "<select/>", { 
		"class": "font-selector",
    html: items.join( "" )
  }).appendTo( ".control--top-left" );
});

var fetchLoadFont = function(fontName){
	WebFont.load({
		google: {
			families: [fontName]
		}
	});
	
	$('.main').css('font-family', fontName);
};

$('.control--top-left').on('change', '.font-selector', function(){
	var thisValue = $(this).val();
	fetchLoadFont(thisValue);
});

///// FONT /////

function division(numOfDivision, letter, timing, delay, animStyle){
	main.html('');
	for(i = 0; i < numOfDivision; i++){
		if(animStyle == 1) {
			var styleDuration = 'animation-duration : '+ timing +'s; animation-delay: '+ - i/delay +'s; ';
		} else {
			var styleDuration = 'animation-duration : ' + (timing - i/delay) + 's; animation-delay: '+ - i +'s; ';	
		}
		
		var styleSize = 'width: '+ (100 - (100 / numOfDivision * i)) +'%; height: '+ (100 - (100 / numOfDivision * i)) +'%; ';
		var stylePosition = 'top: '+ (100 / numOfDivision * i) / 2 +'%; left: '+ (100 / numOfDivision * i) / 2 +'%; ';
		var div = '<div class="letter" style="' + styleDuration + styleSize + stylePosition + '"><span>'+ letter +'</span></div>';
		main.append(div);
	}
	
	oVal.numOfDiv = numOfDivision;
	oVal.letter = letter;
	oVal.timing = timing;
	oVal.delay = delay;
	oVal.animStyle = animStyle;
	
}

division(oVal.numOfDiv, oVal.letter, oVal.timing, oVal.delay, oVal.animStyle);

function restartAnim(){	
	$('#main').find('.letter').css('-webkit-animation-play-state', 'paused');
	setTimeout(function(){
		$('#main').find('.letter').css('-webkit-animation-play-state', 'running');
	}, 1);
};

function changeLetter(text){
	$('.main').find('.letter span').each(function(i){
		$(this).html(text);
	});
	oVal.letter = text;
}

function changeTiming(timing, delay, animStyle){
	$('.main').find('.letter').each(function(i){
		if(animStyle == 1){
			$(this).css('animation-duration', timing +'s').css('animation-delay', - i/delay +'s');
		} else {
			$(this).css('animation-duration', (timing - i/delay) + 's').css('animation-delay', - i +'s');
		}
	});
	oVal.timing = timing;
	oVal.delay = delay;
}

inputYourText.addEventListener('input', function(){
	changeLetter(this.value);
});

inputMainBgColor.addEventListener('change', function(){
	document.documentElement.style.setProperty('--main-bg-color', this.value);
});

inputLetterBgColor.addEventListener('change', function(){
	document.documentElement.style.setProperty('--letter-bg-color', this.value);
});

inputLetterColor.addEventListener('change', function(){
	document.documentElement.style.setProperty('--text-color', this.value);
});

inputLetterBorderColor.addEventListener('change', function(){
	document.documentElement.style.setProperty('--stroke-color', this.value);
});

inputLetterBorderWidth.addEventListener('input', function(){
	document.documentElement.style.setProperty('--stroke-width', this.value + 'px');
});

inputBlendMode.addEventListener('change', function(){
	document.documentElement.style.setProperty('--mix-blend-mode', this.value);
});

inputFontSize.addEventListener('input', function(){
	document.documentElement.style.setProperty('--font-size', this.value + 'vh');
});

inputBlur.addEventListener('input', function(){
	document.documentElement.style.setProperty('--blur', this.value + 'px');
});

inputContrast.addEventListener('input', function(){
	document.documentElement.style.setProperty('--contrast', this.value);
});


inputRadius.addEventListener('input', function(){
	document.documentElement.style.setProperty('--border-radius', this.value + '%');
});
inputPerspective.addEventListener('input', function(){
	document.documentElement.style.setProperty('--perspective', this.value + 'px');
});

// Easing

inputAnimEasing.addEventListener('change', function(){
	document.documentElement.style.setProperty('--easing', this.value);
});

inputTiming.addEventListener('input', function(){
	changeTiming(this.value, oVal.delay, oVal.animStyle);
});

inputDelay.addEventListener('input', function(){
	changeTiming(oVal.timing, this.value, oVal.animStyle);
});

inputDivision.addEventListener('input', function(){
	//changeTiming(oVal.timing, this.value, oVal.animStyle);
	division(this.value, oVal.letter, oVal.timing, oVal.delay, oVal.animStyle);
});

animIsPlaying = true;

buttonPausePlay.addEventListener('click', function(){
	
	if(animIsPlaying == true) {
		document.documentElement.style.setProperty('--animation-play-state', 'paused');
		animIsPlaying = false;
	} else {
		document.documentElement.style.setProperty('--animation-play-state', 'running');
		animIsPlaying = true;
	}
	
	console.log(animIsPlaying)
	
});

inputAnimDirection.addEventListener('change', function(){
	document.documentElement.style.setProperty('--animation-direction', this.value);
});

for (i = 0; i < inputAnimStyle.length; ++i) {
  inputAnimStyle[i].addEventListener('click', function(){
		
		changeTiming(oVal.timing, oVal.delay, this.value)
		
		oVal.animStyle = this.value;
		
		console.log(this.value);
	});
}

var changeTransformOriginOnMouseMove = false;

inputMouseMove.addEventListener('change', function(){

	if(inputMouseMove.checked == true){
		changeTransformOriginOnMouseMove = true;
	} else {
		changeTransformOriginOnMouseMove = false;
	}
	
	console.log(changeTransformOriginOnMouseMove);
	
});

// Anim From

inputFromScaleX.addEventListener('input', function(){
	document.documentElement.style.setProperty('--from-scale-x', this.value);
	//$(window).trigger('resize');
	restartAnim();
});

inputFromScaleY.addEventListener('input', function(){
	document.documentElement.style.setProperty('--from-scale-y', this.value);
	restartAnim();
});

inputFromRotate.addEventListener('input', function(){
	document.documentElement.style.setProperty('--from-rotate', this.value + 'deg');
	restartAnim();
});

inputFromRotateX.addEventListener('input', function(){
	document.documentElement.style.setProperty('--from-rotate-x', this.value + 'deg');
	restartAnim();
});

inputFromRotateY.addEventListener('input', function(){
	document.documentElement.style.setProperty('--from-rotate-y', this.value + 'deg');
	restartAnim();
});

inputFromSkewX.addEventListener('input', function(){
	document.documentElement.style.setProperty('--from-skew-x', this.value + 'deg');
	restartAnim();
});

inputFromSkewY.addEventListener('input', function(){
	document.documentElement.style.setProperty('--from-skew-y', this.value + 'deg');
	restartAnim();
});

inputFromTranslateX.addEventListener('input', function(){
	document.documentElement.style.setProperty('--from-translate-x', this.value + '%');
	restartAnim();
});

inputFromTranslateY.addEventListener('input', function(){
	document.documentElement.style.setProperty('--from-translate-y', this.value + '%');
	restartAnim();
});

// Anim To

inputToScaleX.addEventListener('input', function(){
	document.documentElement.style.setProperty('--to-scale-x', this.value);
	restartAnim();
});

inputToScaleY.addEventListener('input', function(){
	document.documentElement.style.setProperty('--to-scale-y', this.value);
	restartAnim();
});

inputToRotate.addEventListener('input', function(){
	document.documentElement.style.setProperty('--to-rotate', this.value + 'deg');
	restartAnim();
});

inputToRotateX.addEventListener('input', function(){
	document.documentElement.style.setProperty('--to-rotate-x', this.value + 'deg');
	restartAnim();
});

inputToRotateY.addEventListener('input', function(){
	document.documentElement.style.setProperty('--to-rotate-y', this.value + 'deg');
	restartAnim();
});

inputToSkewX.addEventListener('input', function(){
	document.documentElement.style.setProperty('--to-skew-x', this.value + 'deg');
	restartAnim();
});

inputToSkewY.addEventListener('input', function(){
	document.documentElement.style.setProperty('--to-skew-y', this.value + 'deg');
	restartAnim();
});

inputToTranslateX.addEventListener('input', function(){
	document.documentElement.style.setProperty('--to-translate-x', this.value + '%');
	restartAnim();
});

inputToTranslateY.addEventListener('input', function(){
	document.documentElement.style.setProperty('--to-translate-y', this.value + '%');
	restartAnim();
});

//////////////////////////
// Jquery Ui            //
//////////////////////////
		
// $( ".slider" ).slider();

document.addEventListener('mousemove', function(e){
	
	var x = (e.clientX / window.innerWidth) * 100 + '%',
			y = (e.clientY / window.innerHeight) * 100 + '%';
	
	if(changeTransformOriginOnMouseMove){
		document.documentElement.style.setProperty('--transform-origin', x + ' ' + y);	 
	} else {
		document.documentElement.style.setProperty('--transform-origin', '50% 50%');	
	}
	
	
	
});