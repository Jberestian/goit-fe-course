let canvas = document.querySelector('#canvasGame');
let context = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;
let padloHeight = 20;
let padloWidth = 75;
let padloBricHeight = 20;
let padloBricWidth = 75;
let ballX = width/2;
let ballY = height - padloBricHeight;
let ballRadius = 10;
let marginRight = 2;
let matrinTop = 2;
let sppedX = 2;
let speedY = 2;

function ball (x,y,color,radius) {
    context.beginPath();
    context.fillStyle = color;
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();
}

ball(ballX,ballY - ballRadius,'red',ballRadius);

function rectangle(x,y,height,width,color) {
    context.fillStyle = color;
    context.fillRect(x,y,height,width,color);
}
rectangle(width/2 - padloBricWidth/2,height - padloBricHeight,60,20,'red');

function drawBricks() {

for(let j = 0; j < width/2; j+= padloBricHeight + marginRight){
    for(let g = 0; g < height; g+= padloBricWidth + matrinTop)
        rectangle(g,j,padloBricWidth,padloBricHeight,'black')
}
}
drawBricks();

function move() {
    ballX += sppedX;
    ballY -= speedY;
    if(ballX > width - ballRadius){
        sppedX =- sppedX
    }
    if(ballY < - ballRadius){
        speedY =- speedY
    }
    if(ballX < - ballRadius){
        sppedX =- sppedX
    }
    if(ballY > height  - ballRadius){
        speedY =- speedY
    }
    // console.log(ballY);
    // console.log(ballX);
}
start();

function start() {
    setInterval(function () {
        context.clearRect(0, 0, width, height);
        move();
        drawGame();
    },1000/60)
}

move();

function drawGame() {
    drawBricks();
    rectangle(width/2 - padloBricWidth/2,height - padloBricHeight,60,20,'red');
    ball(ballX,ballY - ballRadius,'red',ballRadius);
}


