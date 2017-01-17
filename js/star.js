$(document).ready(function() {
var sphere = $('#sphere');
var tech = $('.technology-part');
function clearClass(arr,cls){
	for(var i = 0; i < arr.length;i++){
		arr[i].classList.remove(cls);
	}
}
    $(".arrow").bind('click', function(e){
        e.preventDefault();
        $('body,html').animate({scrollTop: document.documentElement.scrollHeight},5000, "linear");
    });
function circlePleaced(num,wrap,radius){
	for (i=0;i<num; i++){
    var f = 2/num * i * Math.PI;
    var left = wrap + radius * Math.sin(f) + 'px';
    var top = wrap + radius * Math.cos(f) + 'px';
    $('.technology-part').eq(i).css({'top':top,'left':left});
    }
}
/*$('#front-right').hover(function(){
	$('.flipper').toggleClass('angle-negative');
});
$('#front-left').hover(function(){
	$('.flipper').toggleClass('angle-positive');
});
$('#front-right').click(function(){
	$('.flipper').addClass('flip-right');
});
$('#front-left').click(function(){
	$('.flipper').addClass('flip-left');
});*/
$('.star').hover(function(){
	var self = this;
		if(this.dataset.num != 'all'){
			this.style.transform = 'scale(1.7)';
			this.style.boxShadow = '0px 0px 21px 20px rgba(0,235,252,1);';
			tech[+this.dataset.num].classList.add('active');
			setTimeout(function(){
				tech[+self.dataset.num].classList.remove('active');
				self.style.transform = 'scale(1.0)';
			},2000);
		}
		if(this.dataset.num == 'all') {
			for(var i = 0; i < tech.length;i++){
				tech[i].classList.add('active');
			}
			setTimeout(function(){
					clearClass(tech,'active');
				},4000);
		};
});

  circlePleaced(14,300,300);
});
var flipper = document.querySelector('.flipper');
var divInFlipper = document.querySelectorAll('.flipper > div');
var panelSize = divInFlipper[0].clientWidth;
var angle = 360/divInFlipper.length;
var curAngle = 0;
var tz = Math.round( ( panelSize / 2 ) / Math.tan( Math.PI / divInFlipper.length ) );
for(var i = 0; i < divInFlipper.length;i++){
		divInFlipper[i].style.transform = 'rotateY( ' + curAngle + 'deg )' + ' translateZ( ' + tz + 'px )';
		curAngle+= angle;
}
var s = 0;
flipper.addEventListener('click',function(e){
	var target = e.target;
	console.log(target.tagName);
	if(target.tagName == 'DIV'){
		s-= angle;
		this.style.transform = 'rotateY( ' + s + 'deg )';
	}
});

