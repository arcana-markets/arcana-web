import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Html } from "@react-three/drei";
import Loader from "./Loader";
import Wizard from "./Wizard";
import { Model as Particles } from "./Particles";

export default function Scene() {
  return (
    <div className='w-full h-[140vh] bg-black relative'>
      <Canvas className='!h-screen'>
        <Suspense fallback={null}>
          <Environment files='/Env/venice_sunset_1k.hdr' />
          <Wizard />
          <Particles />
        </Suspense>
        <Html fullscreen>
          <Loader />
        </Html>
      </Canvas>
    </div>
  );
}
