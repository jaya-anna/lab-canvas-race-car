const myCanvas = document.querySelector("canvas");
const ctx = myCanvas.getContext("2d");
myCanvas.style.border = "2px solid black";

const roadImg = new Image();
roadImg.src = "./images/road.png";

const roadImg2 = new Image()
roadImg2.src = "./images/road.png";

const carImg = new Image();
carImg.src = "./images/car.png";

let road1Y = 0
let road2Y = -myCanvas.height

const carWidth = 50
const carHeight = 100
let carX = myCanvas.width / 2 - carWidth / 2


// game varibles

let gameOver = false
let animateId;

let moveRight = false
let moveLeft = false

let score = 0;


// classes


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };


  function animate() {
   ctx.drawImage(roadImg, 0, road1Y, myCanvas.width, myCanvas.height);
   ctx.drawImage(roadImg2, 0, road2Y, myCanvas.width, myCanvas.height);
   
   moveCar()
   
   road1Y += 2
   road2Y += 2

   if(road1Y > myCanvas.height){
    road1Y = -myCanvas.height
   }

   if(road2Y > myCanvas.height){
    road2Y = -myCanvas.height
   }
  
   if(!gameOver){
     animateId = requestAnimationFrame(animate)
   } else {
  cancelAnimationFrame(animateId)
  }
 }

 function moveCar(){
  ctx.drawImage(carImg, carX, 570, carWidth, carHeight);

  if(moveLeft == true){
  carX -= 2
  }
  if(moveRight == true){
   carX += 2
  }

 }

  function startGame() {
    animate();
    console.log('Game started');
  }


  document.addEventListener('keypress', (event) => {
     
    if(event.key === "a"){
     moveLeft = true
    }
    if(event.key === "d"){
      moveRight = true
    }
  
  });

  document.addEventListener('keyup', (event) => {
    moveRight = false
    moveLeft = false
})


}
