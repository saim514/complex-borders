function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(200,200);
    video = createCapture(VIDEO);
    video.hide();
    
    tint_color = "";
}

function draw()
{
    image(video, 170, 120, 370, 290);
    circle(40, 40, 80);
    fill("aqua");
    circle(600, 440, 80);
    rect(90, 20, 460, 50);
    fill("grey");
    rect(90, 420, 460, 50);
    circle(40,440,80);
    fill("green");
    circle(600,40,80);
    
}

function take_snapshot()
{
    save("picture.png");
}
