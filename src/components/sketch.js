import React from 'react';
import Sketch from "react-p5";

const P5Sketch = (props) => {
    let cols = 40, rows = 40, s = 700, step = (s / cols), factor = 0.03;
    let strings = ['🍒', '🍊', '🍕', '🍤', '🌽']

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(s, s - step).parent(canvasParentRef);
        p5.textSize(step);
    };

    const draw = (p5) => {
        p5.background(0);

        for (let y = 1; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                var n = p5.noise(x * factor, y * factor, p5.frameCount * 0.01) * 2;
                n = (n - p5.int(n)) * 3;
                var cx = p5.sin(n);
                var cy = p5.cos(n);
                var i = p5.floor(p5.map(cx * cy, -0.5, 0.45, 0, strings.length - 1));
                p5.text(strings[i], x * step + 3, y * step);
            }
        }
    };
    return <Sketch setup={setup} draw={draw} />;
};

export default P5Sketch