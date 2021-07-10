img = "";
status = "";

function preload(){
    img = loadImage("AirAC.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectdetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log('ModelLoaded');
    status = true;
    objectdetector.detect(img,gotresult);
}

function gotresult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}

function draw(){
image(img, 0, 0, 640, 420);
text("Dog", 45, 75);
rect(30, 60, 450, 350);
}

function accc()
{
    window.location('index.html');
}