class tree{
    constructor(x,y, width, heigth)
	{
		var options={
			isStatic:true,
			
			}
		this.image= loadImage("Plucking mangoes/tree.png");
		this.x=x;
		this.y=y;
        this.width= width;
        this.height=heigth;
		this.body=Bodies.rectangle(this.x, this.y, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var Treepos=this.body.position;		

			push()
			//translate(Treepos.x,Treepos.y);
			rectMode(CENTER);
			strokeWeight(3);
			fill(0,255,255)
			imageMode(CENTER);
			image(this.image, this.x,this.y,this.width,this.height);
			//ellipse(0,0,this.r*2, this.r*2);
			pop()
			
	}

}