class IRON{
	constructor(x,y,width,height)
	{  var options = {
		'density':30,
		'friction': 3,
		'restitution':0.8
	}
	this.body = Bodies.rectangle(x,y,width,height,options);
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	World.add(world, this.body);
}
display(){

var pos = this.body.position;
push();
translate(pos.x, pos.y);
rectMode(CENTER);
strokeWeight(3);
stroke("yellow");
fill("black");
rect(0, 0, this.width, this.height);
pop();
}
}