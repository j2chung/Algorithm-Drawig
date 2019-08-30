//@param: x, y are the size of the canvas
function DNA(x, y) {
  //polygon colors
  this.triangle_RGB1 = randomRGB();
  this.triangle_point_1_1 = randomPoint(x, y);
  this.triangle_point_1_2 = randomPoint(x, y);
  this.triangle_point_1_3 = randomPoint(x, y);
}

function randomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ', ' + 0.5 + ')';
}

function randomPoint(width, height) {
  let x = Math.floor(Math.random() * width);
  let y = Math.floor(Math.random() * height);
  return x + ',' + y;
}

function draw(ctx) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.drawImage($('#parent')[0], 0, 0);
  let triangle_RGB1 = randomRGB();
  let triangle_point_1_1 = randomPoint(ctx.canvas.width, ctx.canvas.height);
  let triangle_point_1_2 = randomPoint(ctx.canvas.width, ctx.canvas.height);
  let triangle_point_1_3 = randomPoint(ctx.canvas.width, ctx.canvas.height);
  let tp1 = triangle_point_1_1.split(',');
  let tp2 = triangle_point_1_2.split(',');
  let tp3 = triangle_point_1_3.split(',');
  ctx.beginPath();
  ctx.moveTo(tp1[0], tp1[1]);
  ctx.lineTo(tp2[0], tp2[1]);
  ctx.lineTo(tp3[0], tp3[1]);
  ctx.closePath;
  ctx.fillStyle = triangle_RGB1;
  ctx.fill();
}

function test() {
  let canvas = $('#child')[0];
  let ctx = canvas.getContext('2d');
  draw(ctx);
}

function test2() {
  let parent = $('#parent')[0];
  let parentctx = canvas.getContext('2d');
  var parentimgData = parentctx.getImageData(0,0,canvas.width,canvas.height);
  let parentData = parentimgData.data;
  for (let i = 0; i < parentData.length; i+=4) {
    console.log('(' + parentData[i] + ', ' + parentData[i+1] + ', ' + parentData[i+2] + ')');
  }
}

/*
function mutateDNA() {
  let canvas = $('#child')[0];
  let ctx = canvas.getContext('2d');
  window.setInterval(function(){
    console.log("hello");
    ctx.drawImage($('#parent')[0], 0, 0);
    while(compareSource() == false) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.drawImage($('#parent')[0], 0, 0);
      let triangle_RGB1 = randomRGB();
      let triangle_point_1_1 = randomPoint(ctx.canvas.width, ctx.canvas.height);
      let triangle_point_1_2 = randomPoint(ctx.canvas.width, ctx.canvas.height);
      let triangle_point_1_3 = randomPoint(ctx.canvas.width, ctx.canvas.height);
      let tp1 = triangle_point_1_1.split(',');
      let tp2 = triangle_point_1_2.split(',');
      let tp3 = triangle_point_1_3.split(',');
      ctx.beginPath();
      ctx.moveTo(tp1[0], tp1[1]);
      ctx.lineTo(tp2[0], tp2[1]);
      ctx.lineTo(tp3[0], tp3[1]);
      ctx.closePath;
      ctx.fillStyle = triangle_RGB1;
      ctx.fill();
    }
    let parentCanvas = $('#parent')[0];
    let pctx = parentCanvas.getContext('2d');
    pctx.drawImage($('#child')[0], 0, 0);
  }
}
/*

function compareSource() {
  let parent = $('#parent')[0];
  let parentctx = canvas.getContext('2d');
  let child = $('#child')[0];
  let childctx = canvas.getContext('2d');
  let source = $('#source')[0];
  let sourcectx = canvas.getContext('2d');
  let parentimgData = parentctx.getImageData(0, 0, parentctx.canvas.width, parentctx.canvas.height);
  let childimgData = childctx.getImageData(0, 0, childctx.canvas.width, childctx.canvas.height);
  let sourceimgData = sourcectx.getImageData(0, 0, sourcectx.canvas.width, sourcectx.canvas.height);
  let parentData = parentimgData.data;
  let childData = childimgData.data;
  let sourceData = sourceimgData.data;
  let parentcount = 0;
  let childcount = 0;
  for (let i = 0; i < sourceData.length; i+=4) {
    let deltachild = compareColor(sourceData[i], sourceData[i+1], sourceData[i+2], childData[i], childData[i+1], childData[i+2]);
    if (deltachild < 50) {
      let deltaparent = compareColor(sourceData[i], sourceData[i+1], sourceData[i+2], parentData[i], parentData[i+1], parentData[i+2]);
      if (deltachild < deltaparent) {
        childcount++;
      } else {
        parentcount++;
      }
    }
  }
  if (childcount > parentcount) {
    return true;
  } else {
    return false;
  }
}
*/

function compareColor(r1, g1, b1, r2, g2, b2) {
  let r = (r1 + r2) / 2;
  let deltaR = r1 - r2;
  let deltaG = g1 - g2;
  let deltaB = b1 - b2;
  return Math.sqrt( (2 + (r / 256)) * (Math.pow(deltaR, 2)) + 4 * (Math.pow(deltaG, 2)) + (2 + (255 - r) / 256) * (Math.pow(deltaB, 2)) );
}
