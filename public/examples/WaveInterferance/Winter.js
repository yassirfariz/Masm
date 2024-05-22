var canvas = document.getElementById("canvas")
var [ctx,unit,centerX,centerY,t] = initialize(canvas,1.3)
controls()
var Cycle = 0;
var k = 0.1;
function animate(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    k=1/(Cycle%10);
    var func = new Func((x)=>{return 3*Math.exp(-k*x*x)},false,[-8,8])
    var func2 = new Func((x)=>{return -2*Math.exp(-k*(x-t)*(x-t))},false,[-8,8])
    var SFunc = new Func((x)=>{return (func.f(x)+func2.f(x))},false,[-8,8])
    func.draw(ctx,unit,centerX,centerY,"rgba(255,25,255,1)")
    func2.draw(ctx,unit,centerX,centerY,"rgba(25,255,255,1)")
    SFunc.draw(ctx,unit,centerX,centerY,"rgba(255,255,255,1)")
    requestAnimationFrame(animate);  
    Cycle+=0.005;
}
animate()
