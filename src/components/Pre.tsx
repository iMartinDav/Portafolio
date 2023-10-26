import React, { useEffect, useRef } from 'react';

interface PreProps {
  load: boolean;
}

const Pre: React.FC<PreProps> = ({ load }) => {

  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (preloaderRef.current) {
      const preloader = preloaderRef.current.querySelectorAll('#preloader path');
      const preloaderArray = Array.from(preloader) as SVGPathElement[];

      for (let i = 0; i < preloaderArray.length; i++) {
        const path = preloaderArray[i];
        console.log(`Letter ${i} is ${path.getTotalLength()}`);
      }
    }
  }, [preloaderRef]);

  return (
    <div
      ref={preloaderRef}
      id={load ? 'preloader' : 'preloader-none'}
    >
    </div>
  );
}

export default Pre;
