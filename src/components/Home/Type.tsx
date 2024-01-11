import React from 'react';
import Typewriter from 'typewriter-effect';

const Type: React.FC = () => {
  return (
    <div className="text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl">
      <Typewriter
        options={{
          strings: [
            'Pokemon Master ✨🎮',
            'Bioinformatics and Computational Biology 🧬',
            'Full Stack Developer',
            'Open Source Advocate',
            'Web3 Enthusiast',
            'AI & Automation Enthusiast 💚'
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </div>
  );
};

export default Type;
