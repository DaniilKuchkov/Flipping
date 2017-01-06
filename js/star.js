var sphere = document.getElementById('sphere');
var stars = document.getElementsByClassName('star');
var tech = document.getElementsByClassName('technology-part');

sphere.addEventListener('mouseover',function(e){
		var target = e.target;
		if(target.className == 'star' && target.dataset.num != 'all'){
			target.style.transform = 'scale(1.7)';
			target.style.boxShadow = '0px 0px 21px 20px rgba(0,235,252,1);';
			tech[+target.dataset.num].classList.add('active');
			setTimeout(function(){
				tech[+target.dataset.num].classList.remove('active');
				target.style.transform = 'scale(1.0)';
			},1000);
		}
		if(target.dataset.num == 'all') {
			for(var i = 0; i < tech.length;i++){
				tech[i].classList.add('active');
				setTimeout(function(){
					console.log(tech[i]);
					tech[i].classList.remove('active');
				},4000);
			}
		};
});
var num = 14;
var wrap = 300;
var radius = 290;

$(document).ready(function() {
  for (i=0;i<num; i++){
    var f = 2 / num * i * Math.PI;
    var left = wrap + radius * Math.sin(f) + 'px';
    var top = wrap + radius * Math.cos(f) + 'px';
    $('.technology-part').eq(i).css({'top':top,'left':left});
    }
});