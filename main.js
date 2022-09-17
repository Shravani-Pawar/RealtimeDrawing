noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;


function setup()
{
    video=createCapture(VIDEO);
    video.size(550,300);
    video.position(90,250);

    canvas= createCanvas(550,300);
    canvas.position(700,250);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet is initialized');
}

function draw()
{
    background('#969A97');
    fill('#F90093');
    stroke('#F90093');
    square(noseX,noseY,difference);

    document.getElementById("square_side").innerHTML="Width and Height of the square will be ="+difference+"px";
}


function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log(noseY+"=noseY"+noseX+"=nosex");

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);


        console.log("leftwristx="+leftWristX+"rightWristX"+rightWristX+"difference"+difference);



    }
}
