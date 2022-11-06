noseX =0;
noseY =0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(500,500);
    canvas.position(750,100);
    poseNet = ml5.poseNet(video,modalLoaded);
    poseNet.on('pose', gotPoses);
}

function modalLoaded(){
    console.log ('Pose Net is Initialized');
}

function draw(){
    background('#808080');
    fill('#F90093');
    stroke('#F90093');
    square(noseX,noseY,difference);
}


