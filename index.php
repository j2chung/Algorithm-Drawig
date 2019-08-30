<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="algo.js" charset="utf-8"></script>
  <script src="jquery-3.4.1.min.js" charset="utf-8"></script>
</head>
<body>
  <canvas id="parent" width="236" height="236"></canvas>
  <canvas id="child" width="236" height="236"></canvas>
  <canvas id="source" width="236" height="236"></canvas>
  <script type="text/javascript">
    var canvas = $('#parent')[0];
    ctx = canvas.getContext('2d');
    var DNA = new DNA(ctx.canvas.width, ctx.canvas.height);
    let tp11 = DNA.triangle_point_1_1.split(',');
    let tp12 = DNA.triangle_point_1_2.split(',');
    let tp13 = DNA.triangle_point_1_3.split(',');

    var source = $('#source')[0];
    tempctx = source.getContext('2d');
    var img = new Image;
    img.onload = function(){
      tempctx.drawImage(img,0,0);
    };
    img.src = 'high rick.jpg';

    ctx.beginPath();
    ctx.moveTo(tp11[0], tp11[1]);
    ctx.lineTo(tp12[0], tp12[1]);
    ctx.lineTo(tp13[0], tp13[1]);
    ctx.closePath();
    ctx.fillStyle = DNA.triangle_RGB1;
    ctx.fill();

    test();

  </script>
</body>
</html>
