class box
{
     constructor(x,y,width,height)
   {
      var option = 
      {
          isStatic:true
      }
      this.body11 = Bodies.rectangle(x,y,width,height,option);
     
      this.x = x;
      this.y = y;
      this.width = width
      this.height = height
      
      World.add(world,this.body11); 
     
      
   }

display()
{  
   strokeWeight(3)
   stroke("lightgray")
   fill("lightgray")
  
   rect(this.x,this.y, this.width, this.height);
  

}   

}