function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(550,550);
    x=ml5.poseNet(video,modelloded);
    x.on('pose',gotposes);
}
function modelloded(){
    console.log("Model loded.")
}
leftwristx=0;
rightwristx=0;
diffrence=0;
function gotposes(result){
    if(result.length>0){
        console.log(result);
        leftwristx=result[0].pose.leftWrist.x;
        rightwristx=result[0].pose.rightWrist.x;
        diffrence=Math.floor(leftwristx-rightwristx);
        console.log(diffrence);
        console.log("left wrist X axis is :",leftwristx+"right wrist X axis is :",rightwristx);
    }
}
function draw(){
    background("grey");
    document.getElementById("p").innerHTML="Width and the height of the square will be : "+diffrence+"px";
    textSize(diffrence)
    fill("#FF10F0")
    stroke("magenta")
    text('Deva Nanda',50,400);
}