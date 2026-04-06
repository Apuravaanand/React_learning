import React from "react";

function Loader() {
  const dots = Array.from({ length: 8 });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-16 h-16 animate-spin">
        {dots.map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full"
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${i * 45}deg) translate(30px)`,
              transformOrigin: "0 0",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Loader;