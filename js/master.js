(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());

var $windowpane = $(window);
var $master = $('.master');
var $eject = $('.eject');
var $top = $('.top');
var $txt = $('.txt');

var mobileCheck;
var txtHeight = [];

$(document).ready(function(){
	mobileCheck = $windowpane.width() > 768 ? -10 : false;
});

$(window).load(function(){
	$master.removeClass('wait');
	setTimeout(function() { heights(true); }, 500);
});

$(window).resize(function(){
	heights(false);
});


$eject.on('click', function(){
	$master.toggleClass('view');
	if (!$master.hasClass('view')) $top.each(function(){ setTimeout(function(){ closer($top); }, 1000) })
})

$top.on('click', function(){
	var $that = $(this);
	txtOffset = txtHeight[$that.parents('.across').index()];
	if (!$that.hasClass('heywereopen')) opener($that, txtOffset);
	else closer($that);
})

function opener($thisone, theOffset){
	if (mobileCheck){
		$thisone.css({'margin-top':-theOffset/2}).addClass('heywereopen')
		.next('.txt').addClass('open').css({
			'height':theOffset,//+30,
			'margin-top':-theOffset/2
		})
	}else{
		$thisone.addClass('heywereopen')
		.next('.txt').addClass('open').css({
			'height':theOffset//+15
		});
	}

	closer($thisone.parent().siblings().children('.top'));
}

function closer($thisone){
	$thisone.css({'margin-top':mobileCheck}).removeClass('heywereopen')
	.next('.txt').removeClass('open').css({
		'height':0,
		'margin-top':0
	})
}

function heights(isNew){
	$txt.each(function(e){
		var $that = $(this);
		txtHeight[e] = $that.outerHeight(true);
		console.log(txtHeight);
		isNew && $that.addClass('ready');
	})
}













