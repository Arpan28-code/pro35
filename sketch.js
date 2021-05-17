//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload()
{
	happyDog=LoadImage("happydog.png");
  dogimg=LoadImage("Dog.png");
}

function setup() {
	createCanvas(500,500);
  background(46, 139, 87);
  dog.addImg("dogimg");
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImg("happyDog");


}
  drawSprites();
  //add styles here
Text("PRESS UP ARROW TO FEED",displayheight-20,displaywidth-100);
}
function readStock(data){

foodS=data.val();


}
function writeStock(x){
  if (x<=0){
    
    x=0
     
  }else{
x=x-1

  }

  database.ref('/').update({

Food:x
 
  })
}

