let Sketch = function (p5) {
  let rings; // number of rings: 1 and 150
  let stroke; // stroke weight: 1 and 60
  let dim_init = 15; // size of inner hole: 0 and canvas/2
  let dim_delta;  // rings margins (ring - dim-delta): 1 and 100

  let chaos_init = .0001; // roughness of rings: 0.0001 and 5
  let chaos_delta = .1; // variation between rings: 0.01 and 1
  let chaos_mag = 50; // makes rings bigger, more random: 10 and 80

  let color;

  let ox = p5.random(10000);
  let oy = p5.random(10000);
  let oz = p5.random(10000);

  p5.setup = () => {
    p5.createCanvas(550, 550);
    p5.smooth();
    p5.noFill();
  };

  p5.draw = () => {

    p5.strokeWeight(stroke);
    p5.clear();
    p5.translate(p5.width / 2, p5.height / 2);
    display();
    //p5.noLoop(); 
  };


  p5.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    rings = newProps.rings;
    stroke = newProps.stroke;
    dim_delta = newProps.spacing;
    color = newProps.color;
    // dim_init = newProps.inner; // TODO: Figure out why this is breaking it
  }

  function display() {

    ox += 0; // x-movement factor: -0.25 and 0.25
    oy += 0.0025; // y-movement factor: -0.25 and 0.25
    oz += -.0025; // z-movement factor: -0.25 and 0.25
    for (let i = 0; i < rings; i++) {
      p5.stroke(color);
      p5.beginShape();
      for (let angle = 0; angle < 360; angle++) {
        let radian = p5.radians(angle);
        let radius = (chaos_mag * getNoiseWithTime(p5, radian, chaos_delta * i + chaos_init, oz)) + (dim_delta * i + dim_init);
        p5.vertex(radius * p5.cos(radian), radius * p5.sin(radian));
      }
      p5.endShape(p5.CLOSE);
    }
  }

  function getNoiseWithTime(p5, radian, dim, time) {
    let r = radian % p5.TWO_PI;
    if (r < 0.0) { r += p5.TWO_PI; }
    return p5.noise(ox + p5.cos(r) * dim, oy + p5.sin(r) * dim, oz + time);
  }
}



export default Sketch
