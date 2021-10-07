var last_position_of_x, last_position_of_y;
var mouseEvent = "empty";

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "pink";
width_of_line = 5;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("Color").value;
    width_of_line = document.getElementById("Width_of_line").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    current_position_of_X = e.client - canvas.offsetLeft;
    current_position_of_Y = e.client - canvas.offsetTop;

    if (mouseEvent = "mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_X, current_position_of_Y);
        ctx.stroke();
    }
    console.log("Hi");
    last_position_of_x = current_position_of_X;
    last_position_of_y = current_position_of_Y;
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e)
{
    last_position_of_touch_x = e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_touch_y = e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e)
{
    last_position_of_touch_x = e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_touch_y = e.touches[0].clientY-canvas.offsetTop;

    current_position_of_touch_X = e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_touch_Y = e.touches[0].clientY-canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_X, current_position_of_touch_Y);
    ctx.stroke();

    last_position_of_touch_x = current_position_of_touch_X;
    last_position_of_touch_y = current_position_of_touch_Y;
}

function cleararea()
    {
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    }