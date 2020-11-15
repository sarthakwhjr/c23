class Box
{
    constructor(x,y,width,height)
    {
        var box_options=
        {
            restitution:0.4,
            friction:0.3,
            density:1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,box_options)
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        World.add(world,this.body);

    }

    display()
    {

        var pos= this.body.position
      var angle= this.body.angle;

         push();
         translate(pos.x,pos.y)
         rotate(angle);
        
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();


    }


}







