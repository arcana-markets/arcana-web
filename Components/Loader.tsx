import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Loader() {
  const loader = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (loader.current) {
      // Create a GSAP timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

      // Add animations to the timeline
      tl.to(loader.current, {
        delay: 6.5,
        opacity: 0,
        duration: 2,
        onComplete: () => {
          if (loader.current) loader.current.style.display = "none";
        },
      }); // Fade out the loader itself
    }
  }, []);
  return (
    <div
      ref={loader}
      className='h-[100vh] w-full absolute top-20 left-0  bg-cover hero-loader'
    >
      <p>Archana</p>
      <p>Markets</p>
    </div>
  );
}
