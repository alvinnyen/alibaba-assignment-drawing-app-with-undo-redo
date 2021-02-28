import { useLayoutEffect, useState } from "react";
import rough from "roughjs/bundled/rough.esm.js";

const generator = rough.generator();

function App() {
  const [drawing, setDrawing] = useState(false);

  useLayoutEffect(() => {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    const roughCanvas = rough.canvas(canvas);
    const rect = generator.rectangle(10, 10, 100, 100);
    roughCanvas.draw(rect);
  });

  const handleMouseDown = (event) => {
    setDrawing(true);
  };

  const handleMouseMove = (event) => {
    if (!drawing) return;

    const { clientX, clientY } = event;
    console.log(clientX, clientY);
  };

  const handleMouseUp = (event) => {
    setDrawing(false);
  };

  return (
    <div className="App">
      <canvas
        id="canvas"
        style={{ backgroundColor: "blue" }}
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        Canvas
      </canvas>
    </div>
  );
}

export default App;
