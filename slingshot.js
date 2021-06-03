class Slingshot
{
    constructor (body1,body2)
    {
        var option= {bodyA:body1, bodyB:body2, stiffness:0.04, length:10}
        this.sling = Matter.Constraint.create(option);
        World.add(world,this.sling)
    }

    display()
    {
        stroke("black")
        strokeWeight(4)
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.bodyB.position.x,this.sling.bodyB.position.y)
    }
}
