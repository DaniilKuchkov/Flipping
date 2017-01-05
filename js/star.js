var sphere = document.getElementById('sphere');
var stars = document.getElementsByClassName('star');
var tech = document.getElementsByClassName('technology-part');
sphere.addEventListener('mouseover',function(e){
		var target = e.target;
		if(target.className == 'star'){
			target.style.transform = 'scale(1.7)';
			target.style.boxShadow = '0px 0px 21px 20px rgba(0,235,252,1);';
			tech[+target.dataset.num].classList.add('active');
			setTimeout(function(){
				tech[+target.dataset.num].classList.remove('active');
				target.style.transform = 'scale(1.0)';
			},1000);
		}
});
	var star = document.createElement('div');
	star.setAttribute('class','star');
var starArr = new Array(14);
var n = 0;
for(var i = 0 ; i < starArr.length;i++){
	starArr[i] = star;
	starArr[i].dataset.num = n;
	console.log(starArr[i]);
}
var canvas = document.getElementById('stuff');
var context = canvas.getContext('2d');
function randomVal(val){
	return Math.floor(Math.random()*val);
}

function drawCircle(x,y,r){
	  context.beginPath();
      context.arc(x, y, r, 0, 2 * Math.PI, false);
      context.fillStyle = 'green';
      context.fill();
}
for(var i = 0; i<14;i++){
	drawCircle(randomVal(canvas.width),randomVal(canvas.height),2);
}
      
  
