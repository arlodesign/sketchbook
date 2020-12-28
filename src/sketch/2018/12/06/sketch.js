import p5 from "p5";

const sketch = function (p) {
  const speed = 6;
  let scalar;
  let angle = 0;
  let size;
  let clr = "pink";

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background("white");
    p.colorMode(p.HSB, 1000);
    p.noStroke();
    scalar = p.random(10, 20);
    size = p.random(10, 20);
  };

  p.draw = function () {
    const x = p.mouseX + p.cos(angle) * scalar;
    const y = p.mouseY + p.sin(angle) * scalar;
    const noiseVal = p.noise(x, y);
    clr === "rainbow" ? p.fill(p.frameCount % 1000, 1000, 1000) : p.fill(clr);

    if (x > 0 && y > 0 && x < p.width && y < p.height) {
      p.ellipse(x, y, size * noiseVal);
    }
    angle += speed;
  };

  p.touchMoved = function () {
    if (
      p.mouseX >= 0 &&
      p.mouseY >= 0 &&
      p.mouseX <= p.width &&
      p.mouseY <= p.height
    ) {
      return false;
    }
  };

  p.keyReleased = function () {
    switch (p.key) {
      case "p":
        clr = "pink";
        break;

      case "r":
        clr = "red";
        break;

      case "u":
        clr = "purple";
        break;

      case "b":
        clr = "blue";
        break;

      case "g":
        clr = "green";
        break;

      case "o":
        clr = "orange";
        break;

      default:
        clr = "rainbow";
        break;
    }
  };
};

// const DL = styled.dl`
//   display: grid;
//   grid-template: auto / 6ch 1fr;
// `;
// const DT = styled.dt`
//   grid-column: 1;
// `;
// const DD = styled.dd`
//   grid-column: 2;
// `;

new p5(sketch, "sketch");
document.getElementById("description").innerHTML = `
Updated 2020-02-09 to support color. Move the pointer our touch to draw.
Press keys on your keyboard to change the color.
<dl>
  <dt>
    <kbd>P</kbd>
  </dt>
  <dd>pink</dd>

  <dt>
    <kbd>R</kbd>
  </dt>
  <dd>red</dd>

  <dt>
    <kbd>U</kbd>
  </dt>
  <dd>purple</dd>

  <dt>
    <kbd>B</kbd>
  </dt>
  <dd>blue</dd>

  <dt>
    <kbd>G</kbd>
  </dt>
  <dd>green</dd>

  <dt>
    <kbd>O</kbd>
  </dt>
  <dd>orange</dd>
  <dt>Any other key</dt>
  <dd>rainbow</dd>
</dl>`;
