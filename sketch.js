// var notes = [yi, er, san, si, wu, liu, qi, ba, jiu, shi, shiyi, shier, shisan, shisi, shiwu, shiliu];
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

// function doTimer(){
//   interval = setInterval(timeIt, 500000000000000000000);
//   button.html('stop timer');
// }

// function timeIt(){
//   timer.html(counter);
//   counter++;

// }





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

  //   var nyquist = 22050;
  //   // display
  //   var mean_freq_index = fre / (nyquist / spectrum.length);

  //   //console.log(log(1024));
  //   centroidplot = map(log(mean_freq_index), 0, log(spectrum.length), 100, 0);


  
  // var x =0
  // stroke(51);
  // rect(x, 0, 5, height);
  // x = x+3;
  // if (x > width){
  //   x = 0;
  // }

  stroke(0, 0, 0); // black note
 fre = fft.getCentroid();
  var wuxiany
 for ( i =0; i < width; i+= 20) {
    if (fre > 311 && fre < 330) {
      wuxiany = 60;
      ellipse(i, wuxiany, 10, 7)
    } else if (fre > 330 && fre < 369) {
      wuxiany = 55;
      ellipse(i, wuxiany, 10, 7)
    } else if (fre > 369 && fre < 415) {
      wuxiany = 50;
      ellipse(i, wuxiany, 10, 7)
    } else if (fre > 415 && fre < 466) {
      wuxiany = 45;
      ellipse(i, wuxiany, 10, 7)
    } else if (fre > 466 && fre < 508) {
      wuxiany = 40;
      ellipse(i, wuxiany, 10, 7)
    } else if (fre > 508 && fre < 554) {
      wuxiany = 35;
      ellipse(i, wuxiany, 10, 7)
    } else if (fre > 554 && fre < 622) {
      wuxiany = 30;
      ellipse(i, wuxiany, 10, 7)
    } else if (fre > 622 && fre < 680) {
      wuxiany = 25;
      ellipse(i, wuxiany, 10, 7)
    } else if (fre > 680 && fre < 740) {
      wuxiany = 20;
      ellipse(i, wuxiany, 10, 7)
    } else if (fre > 740 && fre < 830) {
      wuxiany = 15;
      ellipse(i, wuxiany, 10, 7)
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

  for (var wuxianpu = 10; wuxianpu <= 60; wuxianpu = wuxianpu + 10) {
    strokeWeight(1);
    stroke(0);
    line(10, wuxianpu, 390, wuxianpu);
  }
}

