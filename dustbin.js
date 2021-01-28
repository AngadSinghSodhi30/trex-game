class Dustbin{
   constructor(x,y,width,height){
       var options = {
           'isStatic': true
       }
       this.bodyb = Bodies.rectangle(x,y,width,height,options);
       World.add(world , bodyb);
       this.body = Bodies.rectangle()
   }
}