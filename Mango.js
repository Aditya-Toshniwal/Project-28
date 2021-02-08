class Mango
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:1,
			density:2

			
			}
		this.image= loadImage("Plucking mangoes/mango.png");
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var Mangopos=this.body.position;		

			push()
			translate(Mangopos.x,Mangopos.y);
			ellipseMode(RADIUS);
			strokeWeight(3);
			fill(0,255,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r*2, this.r*2)
			//ellipse(0,0,this.r*2, this.r*2);
			pop()
			
	}

}