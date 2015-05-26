var slide = document.getElementById('slide');
var right_button = document.getElementById('arrow_right');
var left_button = document.getElementById('arrow_left');
var circle1 = document.getElementById('circle1');
var circle2 = document.getElementById('circle2');
var circle3 = document.getElementById('circle3');
var circle4 = document.getElementById('circle4');


var slike = ["slike/slide_1.png", "slike/slide_2.jpg", "slike/slide_3.jpg", "slike/slide_4.jpg"];
counter = 0;

right_button.onclick = function() {
		if (counter + 1 >= slike.length) {
		counter = 0;
	    }
		else {
		counter++;
		}
		picChange(counter);	
	}

left_button.onclick = function() {
		if (counter <= 0) {
		counter = slike.length -1;
		}
		else {
		counter--;
		}
		picChange(counter);
	}

function picChange(counter) {

	circle1.src = "slike/circle.png";
	circle2.src = "slike/circle.png";
	circle3.src = "slike/circle.png";
	circle4.src = "slike/circle.png";

 if (counter == 0) {
 	slide.src = "slike/slide_1.png";
 	circle1.src = "slike/active.png";
 }

 else if (counter == 1) {
 	slide.src = "slike/slide_2.jpg";
 	circle2.src = "slike/active.png";
 }

  else if (counter == 2) {
 	slide.src = "slike/slide_3.jpg";
 	circle3.src = "slike/active.png";
 }

   else {
 	slide.src = "slike/slide_4.jpg";
 	circle4.src = "slike/active.png";	
 }
}















