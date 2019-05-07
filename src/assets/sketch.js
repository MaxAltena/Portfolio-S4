export default function sketch(p5) {
  let outerElement = document.getElementsByClassName("Splash")[0];
  let width = outerElement.clientWidth;
  let height = outerElement.clientHeight;
  let mouseIsMoving = false;
  let idleStateUpdated = false;
  let direction = true;
  let mouseXmapped = 0;

  p5.setup = function() {
    p5.createCanvas(width, height);
  };

  p5.windowResized = function() {
    width = outerElement.clientWidth;
    height = outerElement.clientHeight;
    p5.resizeCanvas(width, height);
  };

  p5.mouseMoved = function() {
    mouseIsMoving = true;
    setTimeout(function() {
      mouseIsMoving = false;
    }, 500);
  };

  p5.draw = function() {
    p5.background(248, 249, 250);
    p5.angleMode(p5.DEGREES);
    p5.stroke("#222d32");
    p5.strokeWeight(10);
    p5.fill("#222d32");

    if (mouseIsMoving) {
      mouseXmapped = p5.map(p5.mouseX, 0, width, 8, -4);
    } else {
      if (!idleStateUpdated) {
        idleStateUpdated = true;

        if (direction) {
          mouseXmapped += 0.05;
          if (mouseXmapped >= 8) direction = false;
        } else if (!direction) {
          mouseXmapped -= 0.05;
          if (mouseXmapped <= -4) direction = true;
        }

        setTimeout(function() {
          idleStateUpdated = false;
        }, 5);
      }
    }

    let cords = [
      (width / 10) * -1,
      (height / 10) * -1,
      (width / 10) * 7,
      (height / 10) * -1,
      width / 1.5 - mouseXmapped,
      (height / 10) * 0,
      width / 1.5 + mouseXmapped,
      (height / 10) * 1,
      width / 1.5 - mouseXmapped - 40,
      (height / 10) * 2,
      width / 1.5 + mouseXmapped - 40,
      (height / 10) * 3,
      width / 1.5 - mouseXmapped - 80,
      (height / 10) * 4,
      width / 1.5 + mouseXmapped - 80,
      (height / 10) * 5,
      width / 1.5 - mouseXmapped - 120,
      (height / 10) * 6,
      width / 1.5 + mouseXmapped - 120,
      (height / 10) * 7,
      width / 1.5 - mouseXmapped - 160,
      (height / 10) * 8,
      width / 1.5 + mouseXmapped - 160,
      (height / 10) * 9,
      width / 1.5 - mouseXmapped - 200,
      (height / 10) * 10,
      width / 1.5 + mouseXmapped - 200,
      (height / 10) * 11,
      (width / 10) * -1,
      (height / 10) * 11
    ];

    p5.beginShape();
    for (let i = 0; i < cords.length; i++) {
      let x = cords[i];
      i++;
      let y = cords[i];
      p5.curveVertex(x, y);
    }
    p5.endShape(p5.CLOSE);
  };
}
