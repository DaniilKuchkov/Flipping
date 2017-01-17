particlesJS("staff", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": false,
        "value_area": 800
      }
    },
    "color": {
      "value": "#fff" //"#02d8c6"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 1,
        "color": "#00fff6"
      },
      "polygon": {
        "nb_sides": 10
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 3,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 100,
      "color": "#fff",//"#02d8c6",
      "opacity": 0.2,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
      "bounce": true,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 100,
        "size": 5,
        "duration": 2,
        "opacity": 0.5,
        "speed": 0.5
      },
      "repulse": {
        "distance": 70,
        "duration": 10
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});