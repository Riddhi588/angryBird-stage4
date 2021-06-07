class Slingshot
{
    constructor (body1,point)
    {
        var option= {bodyA:body1, pointB:point, stiffness:0.04, length:10}
        this.sling = Matter.Constraint.create(option);
        World.add(world,this.sling)
    }

    display()
    {
        if (this.sling.bodyA!== null) {
        stroke("black")
        strokeWeight(4)
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y)
        }
    }

    fly(){
        this.sling.bodyA = null;
    }

}
