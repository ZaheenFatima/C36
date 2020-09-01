class Milk{
    constructor(x,y, width, height){

       var foodStock;
       var lastFed; 

    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = heigt;
    this.image = loadImage("Virtual-Pet--1-master/images/Milk.png")
}

display(){
   fill(255,255,254);
   textSize(15);
   if(lastFed>=12){
       text("Last Feed : " + lastFed%12 + "PM" ,350, 30);
   }else if(lastFed === 0){
       text("Last Feed : 12 AM", 350,30);
   }else{
       text("Last Feed : " + lastFed + "AM", 350, 30);
   }
}
}