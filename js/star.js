var sphere = document.getElementById('sphere');
var stars = document.getElementsByClassName('star');
var tech = document.getElementsByClassName('technology-part');
sphere.addEventListener('mouseover',function(e){
		var target = e.target;
		if(target.className == 'star'){
			tech[+target.dataset.num].classList.add('active');
		}else tech[+target.dataset.num].classList.remove('active')
});