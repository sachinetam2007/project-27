class Bob{
  constructor(x,y)  {
      var options={
          isStatic:false,
          restitution:0.3,
          friction:1.0,
          density:1.2
      }
      
      this.body=Bodies.circle(x,y,30,options)
      this.radius=70;
      
      
      World .add(world,this.body);
  }
  display(){
      
      var pos=this.body.position;
      push ();
      translate(pos.x,pos.y)
      rotate (this.body.angle);
      //circle(0,0,this.radius)
      imageMode (CENTER)
      
      pop ();
  }
}