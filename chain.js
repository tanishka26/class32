class Chain
{
    constructor(bodyA,pointB)
    {
        //defining the properties or rules for object
        //for option JSON(Java script Object notation) { parameter:value for parameter}
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }
        this.pointB=pointB
        this.chain=Matter.Constraint.create(options)
        this.image1=loadImage("sprites/sling1.png")
        this.image2=loadImage("sprites/sling2.png")
        this.image3=loadImage("sprites/sling3.png")
        World.add(world,this.chain)
    }
    attach(body){this.chain.bodyA = body}
    fly(){this.chain.bodyA = null}
    display()
    {
        image(this.image1,200,20)

        image(this.image2,170,20)


        if(this.chain.bodyA){
        //to display the object using the property
        var pointA= this.chain.bodyA.position
        var pointB= this.pointB
        //line(x1,y1,x2,y2)
        //line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
        stroke (48,22,8)
        if(pointA.x<220)
        {
        strokeWeight(7)
        line(pointA.x-20,pointA.y,pointB.x-10,pointB.y)
        line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3)
        image (this.image3,pointA.x-30,pointA. y-10,15,30)
        }
        else
        {
            strokeWeight(3)
            line(pointA.x+20,pointA.y,pointB.x-10,pointB.y)
            line(pointA.x+20,pointA.y,pointB.x+30,pointB.y-3)
            image (this.image3,pointA.x+25,pointA. y-10,15,30)
            }
        }
    }
}