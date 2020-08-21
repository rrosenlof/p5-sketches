export default function Sketch(p5) {
  let s = 550;
  let grid =40;
  let factor;
  let strings;
  let frame;

  p5.setup = () => {
    var step = s / grid
    p5.createCanvas(s + step*.2, s - step*.8)
    p5.fill(240)
  };

  p5.draw = () => {
    p5.background(0);
    var step = s / grid
      p5.textSize(step * .8);

      for (let y = 1; y < grid; y++) {
        for (let x = 0; x < grid; x++) {
          var n = p5.noise(x * factor, y * factor, p5.frameCount * frame) * 2;
          n = (n - p5.int(n)) * 3;
          var cx = p5.sin(n);
          var cy = p5.cos(n);
          var i = p5.floor(p5.map(cx * cy, -0.5, 0.45, 0, strings.length - 1));
          p5.text(strings[i], x * step + 3, y * step);
        }
    }
  };

  p5.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    grid = newProps.grid;
    factor = newProps.factor;
    strings = newProps.strings;
    frame = newProps.frame;
  }
}