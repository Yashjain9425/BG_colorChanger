import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  const [gradientColor1, setGradientColor1] = useState("#ffffff");
  const [gradientColor2, setGradientColor2] = useState("#000000");
  const [isGradient, setIsGradient] = useState(false);

  const applyGradient = () => {
    setIsGradient(true);
  };

  return (
    <div
      className="w-full h-screen duration-200"
      style={{
        backgroundColor: !isGradient ? color : "",
        background: isGradient ? `linear-gradient(120deg, ${gradientColor1}, ${gradientColor2})` : "",
      }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => {
              setColor("red");
              setIsGradient(false);
            }}
            className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg"
            style={{ backgroundColor: "red" }}>Red
            </button>
          <button
            onClick={() => {
              setColor("blue");
              setIsGradient(false);
            }}
            className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg"
            style={{ backgroundColor: "blue" }}>Blue
          </button>
          <button
            onClick={() => {
              setColor("green");
              setIsGradient(false);
            }}
            className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg"
            style={{ backgroundColor: "green" }}>Green
          </button>
          <button
            onClick={() => {
              setColor("yellow");
              setIsGradient(false);
            }}
            className="outline-none px-4 py-1 rounded-2xl text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}>Yellow
          </button>
          <button
            onClick={() => {
              setColor("grey");
              setIsGradient(false);
            }}
            className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg"
            style={{ backgroundColor: "grey" }}>Grey
          </button>
          <button
            onClick={() => {
              setColor("black");
              setIsGradient(false);
            }}
            className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg"
            style={{ backgroundColor: "black" }}>Black
          </button>
          <input
            type="color"
            onChange={(e) => {
              setColor(e.target.value);
              setIsGradient(false);
            }}
            className="appearance-none w-24 h-10 border border-gray-300 rounded-xl cursor-pointer"
          />
          <div className="flex flex-col items-center gap-2">
            <input
              type="color"
              value={gradientColor1}
              onChange={(e) => setGradientColor1(e.target.value)}
              className="appearance-none w-24 h-8 border border-gray-300 rounded-xl cursor-pointer"
            />
            <input
              type="color"
              value={gradientColor2}
              onChange={(e) => setGradientColor2(e.target.value)}
              className="appearance-none w-24 h-8 border border-gray-300 rounded-xl cursor-pointer"
            />
            <button
              onClick={applyGradient}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-gradient-to-r from-blue-400 to-green-400"
            >Apply Gradient
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
