import { useLayoutEffect } from "react";
import rough from "roughjs/bundled/rough.esm.js";

const generator = rough.generator();

function App() {
  useLayoutEffect(() => {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    const roughCanvas = rough.canvas(canvas);
    const rect = generator.rectangle(10, 10, 100, 100);
    roughCanvas.draw(rect);
  });

  return (
    <div className="App">
      <canvas
        id="canvas"
        style={{ backgroundColor: "blue" }}
        width={window.innerWidth}
        height={window.innerHeight}
        // onMouseDown={handleMouseDown}
        // onMouseMove={handleMouseMove}
        // onMouseUp={handleMouseUp}
      >
        Canvas
      </canvas>
    </div>
  );
}

export default App;
