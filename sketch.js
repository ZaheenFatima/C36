//Create variables here
var database;
var dog, dogI;
var happyDog;
var foodS, foodStock;
function preload()
{
  //load images here
  dogI = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();

  dog = createSprite(200,200,200,200);
  dog.addImage(dogI);
  dog.scale=0.2

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
 background(46,139,87);
 
 fill("White");
text("Pres the up arrow key to feed Drago!!", 150,20);

foodS();
readStock(data);
writeStock(x);


if(keyDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}

  drawSprites();
  //add styles here

}

function foodS(){
    if(keyWentDown(UP_ARROW)){
      Food =Food - 1;
    }
}
function readStock(data){
  foodS =data.val();
}

function writeStock(x){
 database.ref('/').update({
   Food : x
 })
}

