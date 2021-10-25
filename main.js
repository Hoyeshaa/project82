var mouse_Event = "";
var lastx,lasty ;
color = "black";
width = "2";
radius = "40";
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
canvas.addEventListener("mouseup",eventup);
function eventup(e){
    mouse_Event = "mouseup";
}
canvas.addEventListener("mouseleave",eventleave);
function eventleave(e){
    mouse_Event = "mouseleave";
}
canvas.addEventListener("mousedown",eventdown);
function eventdown(e){
    mouse_Event = "mousedown";
    color = document.getElementById("text").value;
  width = document.getElementById("linewidth").value;
  radius = document.getElementById("circle").value;
}
canvas.addEventListener("mousemove",eventmove);
function eventmove(e){
currentx = e.clientX-canvas.offsetLeft;
currentY = e.clientY-canvas.offsetTop;
if( mouse_Event == "mousedown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.arc(currentx, currentY, radius, 0, 2*Math.PI);
    ctx.stroke();
}
lastx = currentx;
lasty = currentY;


}
function clearing(){
    ctx.clearRect(0 , 0 , canvas.width , canvas.height);
    
}
