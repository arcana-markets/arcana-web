import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Html, useProgress } from "@react-three/drei";
import Loader from "./Loader";
import Wizard from "./Wizard";
import { Model as Particles } from "./Particles";

const Load = ({ setIsLoaded }: { setIsLoaded: Function }) => {
  const { progress } = useProgress();

  React.useEffect(() => {
    if (progress === 100) {
      setIsLoaded(true);
    }
  }, [progress]);
  return null;
};

export default function Scene() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <div className='w-full h-[140vh] bg-black relative'>
      <Canvas className='!h-screen'>
        <Suspense fallback={<Load setIsLoaded={setIsLoaded} />}>
          <Environment files='/Env/venice_sunset_1k.hdr' />
          <Particles />
          <Wizard />
        </Suspense>
        <Html fullscreen>
          <Loader isLoaded={isLoaded} />
        </Html>
      </Canvas>
    </div>
  );
}
