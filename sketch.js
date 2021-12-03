var counter = 0;
var inrterval;
var button;
var timer;

function setup() {
  createCanvas(400, 400);
  sound = new p5.AudioIn();
  sound.start();
  fft = new p5.FFT();
  sound.connect(fft);
  timer = createP('timer');
  button = createButton('start');
  button.mousePressed(draw);
  
}

function draw() {
 
  var centroidplot = 0.0;
  var fre = 0;

  background(255);

  stroke(255, 255, 0);
  var spectrum = fft.analyze();
  fill(0, 0, 0);

  //draw the spectrum
  for (var i = 0; i < spectrum.length; i++) {
    var x = map(log(i), 0, log(spectrum.length), 0, width);
    var h = map(spectrum[i], 0, 255, 0, height);
    var rectangle_width = (log(i + 1) - log(i)) * (width / log(spectrum.length));
    rect(x, height, rectangle_width, -h / 3)
  }

  fre = fft.getCentroid();

  stroke(0, 0, 0); // black note
  fre = fft.getCentroid();
  var yaxis
 for ( i =0; i < width; i+= 20) {
    if (fre > 311 && fre < 330) {
      yaxis = 60;
      ellipse(i, yaxis, 10, 7)
    } else if (fre > 330 && fre < 369) {
      yaxis = 55;
      ellipse(i, yaxis, 10, 7)
    } else if (fre > 369 && fre < 415) {
      yaxis = 50;
      ellipse(i, yaxis, 10, 7)
    } else if (fre > 415 && fre < 466) {
      yaxis = 45;
      ellipse(i, yaxis, 10, 7)
    } else if (fre > 466 && fre < 508) {
      yaxis = 40;
      ellipse(i, yaxis, 10, 7)
    } else if (fre > 508 && fre < 554) {
      yaxis = 35;
      ellipse(i, yaxis, 10, 7)
    } else if (fre > 554 && fre < 622) {
      yaxis = 30;
      ellipse(i, yaxis, 10, 7)
    } else if (fre > 622 && fre < 680) {
      yaxis = 25;
      ellipse(i, yaxis, 10, 7)
    } else if (fre > 680 && fre < 740) {
      yaxis = 20;
      ellipse(i, yaxis, 10, 7)
    } else if (fre > 740 && fre < 830) {
      yaxis = 15;
      ellipse(i, yaxis, 10, 7)
    } else if (fre > 830) {
      fill(255, 0, 0);
      stroke(255, 0, 0);
      strokeWeight(1);
      text("TOO HIGH", 10, 20);
    }
}

  fill(0, 0, 0); // black text
  text("centroid: ", 100, 200);
  text(round(fre) + " Hz", 100, 220);

  for (var staff = 10; staff <= 60; staff = staff + 10) {
    strokeWeight(1);
    stroke(0);
    line(10, staff, 390, staff);
  }
}

