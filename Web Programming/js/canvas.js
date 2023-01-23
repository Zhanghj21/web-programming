function draw() {
    // Get Canvas
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(35, 25);
        ctx.bezierCurveTo(37.5, 18.5, 35, 12.5, 25, 12.5);
        ctx.bezierCurveTo(10, 12.5, 10, 31.25, 10, 31.25);
        ctx.bezierCurveTo(10, 40, 20, 51, 37.5, 60);
        ctx.bezierCurveTo(55, 51, 65, 40, 65, 31.25);
        ctx.bezierCurveTo(65, 31.25, 65, 12.5, 50, 12.5);
        ctx.bezierCurveTo(42.5, 12.5, 37.5, 18.5, 37.5, 20);
        ctx.fill();
        //Show a love
    }
}
