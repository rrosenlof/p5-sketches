let Sketch = function(p5) {
    function make2DArray(cols, rows) {
        let arr = new Array(cols);
        for (let i = 0; i < arr.length; i++) {
          arr[i] = new Array(rows);
        }
        return arr;
      }
      let numbers = [
        {
          number: "1",
          squares: [
            [1, 2], [1, 5], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [3, 5]
          ]
        },
        {
          number: "2",
          squares: [
            [1, 1], [1, 3], [1, 4], [1, 5], [2, 1], [2, 3], [2, 5], [3, 1], [3, 2], [3, 3], [3, 5]
          ]
        },
        {
          number: "3",
          squares: [
            [1, 1], [1, 5], [2, 1], [2, 3], [2, 5], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5]
          ]
        },
        {
          number: "4",
          squares: [
            [1, 1], [1, 2], [2, 2], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5]
          ]
        },
        {
          number: "5",
          squares: [
            [1, 1], [1, 2], [1, 3], [1, 5], [2, 1], [2, 3], [2, 5], [3, 1], [3, 3], [3, 4], [3, 5]
          ]
        },
        {
          number: "6",
          squares: [
            [1, 2], [1, 3], [1, 4], [1, 5], [2, 1], [2, 3], [2, 5], [3, 1], [3, 3], [3, 4], [3, 5]
          ]
        },
        {
          number: "7",
          squares: [
            [1, 1], [1, 4], [1, 5], [2, 1], [2, 3], [3, 1], [3, 2]
          ]
        },
        {
          number: "8",
          squares: [
            [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [2, 1], [2, 3], [2, 5], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5]
          ]
        },
        {
          number: "9",
          squares: [
            [1, 1], [1, 2], [1, 3], [1, 5], [2, 1], [2, 3], [2, 5], [3, 1], [3, 2], [3, 3], [3, 4]
          ]
        },
        {
          number: "0",
          squares: [
            [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [2, 1], [2, 5], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5]
          ]
        },
        {
          number: ":",
          squares: [
            [2, 2], [2, 4]
          ]
        },
        {
          number: "-",
          squares: []
        }
      ]
      let grid;
      let cols;
      let rows;
      let resolution = 25;
      let index = 0;
      
      p5.setup = () => {
        p5.createCanvas(950, 175);
        p5.frameRate(4)
        cols = p5.width / resolution;
        rows = p5.height / resolution;
        grid = make2DArray(cols, rows);
      
      
      }
      
      p5.draw = () => {
        drawTime();
        index = (index + 1) % cols;
      
        p5.background(0);
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            let x = ((i + index) % cols) * resolution;
            let y = j * resolution;
            if (grid[i][j] === 1) {
              p5.fill(255);
              p5.stroke(0);
              p5.rect(x, y, resolution - 1, resolution - 1);
              grid[i][j] = 0;
            } else {
              p5.fill(34, 95, 60)
              p5.rect(x, y, resolution - 1, resolution - 1)
            }
          }
        }
      }
      
      function getDigit(name) {
        var num = numbers.find(num => num.number === name);
        return num;
      }
      
      function drawTime() {
        let d = new Date();
        let h = d.getHours();
        let m = d.getMinutes();
        if (m < 10) {
          m = m.toString().padStart(2, '0')
        }
        let s = d.getSeconds();
        if (s < 10) {
          s = s.toString().padStart(2, '0')
        }
        let n = h.toString().concat(":", m, ":", s, "-");
        n = n.toString().split("");
      
        // loops through each digit and 
        let digits = [];
        n.forEach(digit => {
          digits.push(getDigit(digit))
        });
        let offset = 0;
        digits.forEach(digit => {
          for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
              for (let k = 0; k < digit.squares.length; k++) {
                if (digit.squares[k][0] === i && digit.squares[k][1] === j) {
                  grid[i + offset][j] = 1;
                  // fill(0);
                  // rect(x, y, resolution, resolution);
                }
              }
            }
          }
      
          offset += 4
        });
      }
}

export default Sketch