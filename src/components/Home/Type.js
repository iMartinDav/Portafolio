import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Pokemon Master ✨🎮",
          "Bioinformatics and Computational Biology 🧬",
          "Full Stack Developer",
          "Open Source Advocate",
          "Web3 enthusiastic",
          "AI & Automation enthusiastic💚",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
