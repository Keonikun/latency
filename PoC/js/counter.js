var x = 0;
var y = 0;
	
	function init() {
		updateX(x);
		updateY(y);
	}	

	function increaseX(){
		x = x + 1;
		updateX(x);
	}
	
	function increaseY(){
		y = y + 1;
		updateY(y);
	}	
		
	function updateX(valueX) {
    document.getElementById("xValue").innerHTML = "X = "+ valueX;
    }

	function updateY(valueY) {
    document.getElementById("yValue").innerHTML = "Y = "+ valueY;
    }	

init();