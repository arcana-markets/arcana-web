import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Loader({ isLoaded }: { isLoaded: boolean }) {
  const loader = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (loader.current && isLoaded) {
      // Create a GSAP timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

      // Add animations to the timeline
      tl.to(loader.current, {
        opacity: 1,
        duration: 1,
        onComplete: () => {
          if (loader.current) loader.current.style.display = "none";
        },
      }); // Fade out the loader itself
    }
  }, [isLoaded]);
  return (
    <div
      ref={loader}
      className='h-[100vh] w-full absolute top-20 left-0  bg-cover hero-loader'
    >
      <p>Arcana</p>
      <p>Markets</p>
    </div>
  );
}
