class Papper{
constructor(x,y,radius){
var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2

}
this.body=Bodies.circle(x,y,radius,options);
this.radius= 70;
this.image = loadImage("sprites/paper.png")
World.add(world, this.body);
}
display(){
    var pos =this.body.position;
    fill("purple");
 imageMode(CENTER)
 image(this.image,pos.x,pos.y,100,100);
  }
}

