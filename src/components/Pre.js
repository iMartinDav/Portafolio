import React, { useEffect, useRef } from "react";
function Pre(props) {
  const preloaderRef = useRef(null);
  useEffect(() => {
    if (preloaderRef.current) {
      const preloader = preloaderRef.current.querySelectorAll("#preloader path");

      for (let i = 0; i < preloader.length; i++) {
        console.log(`Letter ${i} is ${preloader[i].getTotalLength()}`);
      }
    }
  }, [preloaderRef]);

  return <div ref={preloaderRef} id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
