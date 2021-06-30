valueinput = "" ;
status = "";
function setup(){
canvas = createCanvas(480,380);
canvas.center()
video = createCapture(VIDEO);
video.hide();
}

function draw(){
image(video,0,0,480,380)
}

function preload(){

}

function start(){
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("objects_status").innerHTML = "Status : Detecting Objects";
    valueinput = document.getElementById("input").value ;
    document.getElementById("objects_name").innerHTML = valueinput;

}

function modelLoaded(){
    console.log("modelLoaded!");
    status = true;
  
}