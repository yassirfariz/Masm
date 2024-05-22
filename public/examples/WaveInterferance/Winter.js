var canvas = document.getElementById("canvas")
var [ctx,unit,centerX,centerY,t] = initialize(canvas,1.3)
controls()
var func = new Func((x)=>{return Math.exp(x*x)},false,[-5,5],0.3)
function animate(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    func.draw(ctx,unit,centerX,centerY,"rgba(255,255,255,1)")
    requestAnimationFrame(animate);  
}
animate()
