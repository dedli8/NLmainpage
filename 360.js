var stage;

function init(folder360) {
    console.log(folder360);
    var canvas = document.getElementById("360viewer");
    if (!canvas || !canvas.getContext) return;

    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(true);
    stage.mouseMoveOutside = true;
    createjs.Touch.enable(stage);

    var imgList = [
        `/upload/3D/${folder360}/1.jpg`,
        `/upload/3D/${folder360}/2.jpg`,
        `/upload/3D/${folder360}/3.jpg`,
        `/upload/3D/${folder360}/4.jpg`,
        `/upload/3D/${folder360}/5.jpg`,
        `/upload/3D/${folder360}/6.jpg`,
        `/upload/3D/${folder360}/7.jpg`,
        `/upload/3D/${folder360}/8.jpg`,
        `/upload/3D/${folder360}/9.jpg`,
        `/upload/3D/${folder360}/10.jpg`,
        `/upload/3D/${folder360}/11.jpg`,
        `/upload/3D/${folder360}/12.jpg`,
        `/upload/3D/${folder360}/13.jpg`,
        `/upload/3D/${folder360}/14.jpg`,
        `/upload/3D/${folder360}/15.jpg`,
        `/upload/3D/${folder360}/16.jpg`,
        `/upload/3D/${folder360}/16.jpg`,
        `/upload/3D/${folder360}/17.jpg`,
        `/upload/3D/${folder360}/18.jpg`,
        `/upload/3D/${folder360}/19.jpg`,
        `/upload/3D/${folder360}/20.jpg`,
        `/upload/3D/${folder360}/21.jpg`,
        `/upload/3D/${folder360}/22.jpg`,
        `/upload/3D/${folder360}/23.jpg`,
        `/upload/3D/${folder360}/24.jpg`,
        `/upload/3D/${folder360}/25.jpg`,
        `/upload/3D/${folder360}/26.jpg`,
        `/upload/3D/${folder360}/27.jpg`,
        `/upload/3D/${folder360}/28.jpg`,
        `/upload/3D/${folder360}/29.jpg`,
        `/upload/3D/${folder360}/30.jpg`,
        `/upload/3D/${folder360}/31.jpg`,
        `/upload/3D/${folder360}/32.jpg`,
        `/upload/3D/${folder360}/33.jpg`,
        `/upload/3D/${folder360}/34.jpg`,
        `/upload/3D/${folder360}/35.jpg`,
        `/upload/3D/${folder360}/36.jpg`,
        `/upload/3D/${folder360}/37.jpg`,
        `/upload/3D/${folder360}/38.jpg`,
        `/upload/3D/${folder360}/39.jpg`,
        `/upload/3D/${folder360}/40.jpg`,
        `/upload/3D/${folder360}/41.jpg`,
        `/upload/3D/${folder360}/42.jpg`,
        `/upload/3D/${folder360}/43.jpg`,
        `/upload/3D/${folder360}/44.jpg`,
        `/upload/3D/${folder360}/45.jpg`,
        `/upload/3D/${folder360}/46.jpg`,
        `/upload/3D/${folder360}/47.jpg`,
        `/upload/3D/${folder360}/48.jpg`,
        `/upload/3D/${folder360}/49.jpg`,    ];
    var images = [],
        loaded = 0,
        currentFrame = 0,
        totalFrames = imgList.length;
    var rotate360Interval, start_x;

    var bg = new createjs.Shape();
    stage.addChild(bg);

    var bmp = new createjs.Bitmap();
    stage.addChild(bmp);

    // var myTxt = new createjs.Text("360 prototype", '13px Roboto', "#E81280");
    // myTxt.x = myTxt.y =0;
    // myTxt.alpha = 0.5;
    // stage.addChild(myTxt);

    function load360Image() {
        var img = new Image();
        img.src = imgList[loaded];
        img.onload = img360Loaded;
        images[loaded] = img;
    }

    function img360Loaded(event) {
        loaded++;
        bg.graphics.clear()
        bg.graphics.beginFill("#fff").drawRect(0, 0, stage.canvas.width * loaded / totalFrames, stage.canvas.height);
        bg.graphics.endFill();

        if (loaded == totalFrames) start360();
        else load360Image();
    }

    function start360() {
        document.body.style.cursor = 'none';

        // 360 icon
        // var iconImage = new Image();
        // iconImage.src = "http://jsrun.it/assets/y/n/D/c/ynDcT.png";
        // iconImage.onload = iconLoaded;

        // update-draw
        update360(0);

        // first rotation
        rotate360Interval = setInterval(function() {
            if (currentFrame === totalFrames - 1) {
                clearInterval(rotate360Interval);
                addNavigation();
            }
            update360(1);
        }, 25);
    }

    function iconLoaded(event) {
        var iconBmp = new createjs.Bitmap();
        iconBmp.image = event.target;
        iconBmp.x = 20;
        iconBmp.y = canvas.height - iconBmp.image.height - 20;
        stage.addChild(iconBmp);
    }

    function update360(dir) {
        currentFrame += dir;
        if (currentFrame < 0) currentFrame = totalFrames - 1;
        else if (currentFrame > totalFrames - 1) currentFrame = 0;
        bmp.image = images[currentFrame];
    }

    //-------------------------------
    function addNavigation() {
        stage.onMouseOver = mouseOver;
        stage.onMouseDown = mousePressed;
        document.body.style.cursor = 'auto';
    }

    function mouseOver(event) {
        document.body.style.cursor = 'pointer';
    }

    function mousePressed(event) {
        start_x = event.rawX;
        stage.onMouseMove = mouseMoved;
        stage.onMouseUp = mouseUp;

        document.body.style.cursor = 'w-resize';
    }

    function mouseMoved(event) {
        var dx = event.rawX - start_x;
        var abs_dx = Math.abs(dx);

        if (abs_dx > 5) {
            update360(dx / abs_dx);
            start_x = event.rawX;
        }
    }

    function mouseUp(event) {
        stage.onMouseMove = null;
        stage.onMouseUp = null;
        document.body.style.cursor = 'pointer';
    }

    function handleTick() {
        stage.update();
    }

    document.body.style.cursor = 'progress';
    load360Image();

    // TICKER
    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.setFPS(24);
    createjs.Ticker.useRAF = true;
}

// Init
//  window.addEventListener('load', init, false);

