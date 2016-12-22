(function() {

    var width, height, mini, canvas, ctx, points, target, animateHeader = true;

    // Main
    initHeader();
    initAnimation();
    addListeners();
    function initHeader() {
        mini = document.getElementById('mini');
        width = mini.offsetWidth;
        height = mini.offsetHeight;
        target = {x: width/2, y: height/2};

        //mini.style.height = height+'px';
        // var img1 = document.getElementById("img1");
        // var pic = new Image();
        // pic.src = "../img/1.png";
        canvas = document.getElementById('demo2-canvas');
        // pic.onload = function () {
        //     ctx.drawImage(pic, 0, 0);
        // }

        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create points
        points = [];
        for(var x = 0; x < width; x = x + width/5) {
            for(var y = 0; y < height; y = y + height/5) {
                var px = x + Math.random()*width/4;
                var py = y + Math.random()*height/4;
                px = Math.round(px);
                py = Math.round(py);
                var p = {x: px, originX: px, y: py, originY: py };
                points.push(p);
            }
        }
    console.log(points[0]);
        // for each point find the 5 closest points
        for(var i = 0; i < points.length; i++) {
            var closest = [];
            var p1 = points[i];
            for(var j = 0; j < points.length; j++) {
                var p2 = points[j]
                if(!(p1 == p2)) {
                    var placed = false;
                    for(var k = 0; k < 4; k++) {
                        if(!placed) {
                            if(closest[k] == undefined) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }

                    for(var k = 0; k < 3; k++) {
                        if(!placed) {
                            if(getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }
                }
            }
            p1.closest = closest;
        }

        // assign a circle to each point
        for(var i in points) {
            var c = new Circle(points[i], 2+Math.random()*3, 'rgba(16,248,251,1)');
            points[i].circle = c;
        }
    }

    //Event handling
    function addListeners() {
        // if(!('ontouchstart' in window)) {
            // window.addEventListener('mousemove', mouseMove);
        // }
        document.getElementById("demo2-canvas").addEventListener('click', mouseMove);
        // window.addEventListener('scroll', scrollCheck);
        // window.addEventListener('resize', resize);
    }
    //
    function mouseMove(e) {
        var posx = posy = 0;
        if (e.pageX || e.pageY) {
            posx = e.offsetX;
            posy = e.offsetY;
        }
        else if (e.clientX || e.clientY)    {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;

        }
        target.x = posx;
        target.y = posy;
        console.log('x:'+posx+"y:"+posy);
    }
    function choosePoint() {

    }

    // function scrollCheck() {
    //     if(document.body.scrollTop > height) animateHeader = false;
    //     else animateHeader = true;
    // }

    // function resize() {
    //     // width = window.innerWidth;
    //     // height = window.innerHeight;
    //     mini.style.height = height+'px';
    //     canvas.width = width;
    //     canvas.height = height;
    // }

    // animation
    function initAnimation() {
        animate();
        for(var i in points) {
            shiftPoint(points[i]);
        }
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in points) {
                // detect points in range
                points[i].active = 0.1;
                points[i].circle.active = 1;
                drawLines(points[i]);
                points[i].circle.draw();
            }
        }
       requestAnimationFrame(animate);
    }

    function shiftPoint(p) {
        TweenLite.to(p, 2+1*Math.random(), {x:p.originX-50+Math.random()*100,
            y: p.originY-50+Math.random()*100, ease:Circ.easeIn,
            onComplete: function() {
                shiftPoint(p);
            }});
    }

    // Canvas manipulation
    function drawLines(p) {
        if(!p.active) return;
        for(var i in p.closest) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.closest[i].x, p.closest[i].y);
            ctx.strokeStyle = 'rgba(16,248,251,0.3)';
            ctx.shadowColor =  'rgb(16,248,251)';
            ctx.shadowOffsetX = 10;
            ctx.shadowOffsetY = 10;
            ctx.shadowBlur = 30;
            ctx.stroke();
        }
    }

    function Circle(pos,rad,color) {
        var _this = this;

        // constructor
        (function() {
            _this.pos = pos || null;
            _this.radius = rad || null;
            _this.color = color || null;
        })();

        this.draw = function() {
            if(!_this.active) return;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(16,248,251, '+ _this.active+')';
            // ctx.shadowColor =  'rgb(16,248,251)';
            // ctx.shadowOffsetX = 1;
            // ctx.shadowOffsetY = 1;
            // ctx.shadowBlur = 5;
            ctx.fill();
        };
    }

    // Util
    function getDistance(p1, p2) {
        return Math.pow(p1.x - p2.x, 4) + Math.pow(p1.y - p2.y, 4);
    }

})();
