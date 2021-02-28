import { useLayoutEffect } from "react";

function App() {
  useLayoutEffect(() => {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    context.fillStyle = "green";
    context.fillRect(10, 10, 150, 100);
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
