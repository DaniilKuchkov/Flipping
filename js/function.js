$(document).ready(function () {

    function shuffle(array) {
        for (var j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
        return true;
    }
    var mas = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14);
    shuffle(mas);

    var name;
    function show(name) {
      // $(name).fadeTo(0, 1);
        // //$(name).fadeTo(1000, 0.2);
        alert(name);
    }
    for (var i = 1; i <= mas.length; i++) {
        name = "#t" + mas[i];

    }
    setInterval(show, 2000, name);
   //
   });
