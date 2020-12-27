class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
        bodyA:body1,
        bodyB:body2,
        stiffness:0.04,
        length:10,
        pointB:{x:offsetX,y:offsetY}
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
    var pointA=this.chain.bodyA.position;
    var pointB=this.chain.bodyB.position;
    var anchor1x=pointA.x
    var anchor1y=pointA.y
    var anchor2x=pointB.x+this.offsetX;
    var anchor2y=pointB.y+this.offsetY;
    strokeWeight(4);
    line (anchor1x,anchor1y,anchor2x,anchor2y);
    }
}