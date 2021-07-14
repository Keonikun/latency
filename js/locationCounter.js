var x = 0;
var y = 0;
var mazeLocation = 0;




function init() {
    update(x,y);
}	

function increaseX() {
    if (x == 2) {x = 0;}
    else {x++;}
    update(x,y);
}

function increaseY() {
    if (y == 2) {y = 0;}
    else {y++;}
    update(x,y);
}	
    
function update(valueX,valueY) {
    /*
    document.getElementById("xValue").innerHTML = "X = "+ valueX;
    document.getElementById("yValue").innerHTML = "Y = "+ valueY;
    */
    if (valueX == 0 && valueY == 0) {mazeLocation = 0;}
    else if (valueX == 1 && valueY == 0) {mazeLocation = 1;}
    else if (valueX == 2 && valueY == 0) {mazeLocation = 2;}
    else if (valueX == 0 && valueY == 1) {mazeLocation = 3;}
    else if (valueX == 1 && valueY == 1) {mazeLocation = 4;}
    else if (valueX == 2 && valueY == 1) {mazeLocation = 5;}
    else if (valueX == 0 && valueY == 2) {mazeLocation = 6;}
    else if (valueX == 1 && valueY == 2) {mazeLocation = 7;}
    else if (valueX == 2 && valueY == 2) {mazeLocation = 0;}

    /* visualization of map, wow look at me commenting things

    0 -- 1 -- 2 | 0 -- 1 -- 2 | 0 -- 1 -- 2
    3 -- 4 -- 5 | 3 -- 4 -- 5 | 3 -- 4 -- 5 
    6 -- 7 -- 0 | 6 -- 7 -- 0 | 6 -- 7 -- 0 

    top link moves right, bottom like moves down

    worldwrapping!
    */

    document.getElementById("mazeLocation").innerHTML = "location = "+ mazeLocation;
}

/* why did I make 2 of them
function updateX(valueX) {
document.getElementById("xValue").innerHTML = "X = "+ valueX;
}

function updateY(valueY) {
document.getElementById("yValue").innerHTML = "Y = "+ valueY;
}	
*/


init();
		
document.getElementById("link1").addEventListener("click", increaseX);
    
document.getElementById("link2").addEventListener("click", increaseY);
