class ComputerBase{
	constructor(x1,y1,width1,height1,img)
	{

	
		var options={
			isStatic: true
		};

		this.body=Bodies.rectangle(x1,y1,width1,height1,options);
		this.width=width1;
        this.height=height1;
        this.image = loadImage(img);

        World.add(world, this.body);
	}

	display()
	{
		var pos = this.body.position;
        var angle = this.body.angle;


        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);


        pop();
	}


  

}
