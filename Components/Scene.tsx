import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, OrbitControls, Box, useGLTF } from "@react-three/drei";
import Loader from "./Loader";
import * as THREE from "three";
import { Model } from "./Final";

// const Model = () => {
//   const gltf = useGLTF("/Animation_loop.glb", true);
//   const modelRef = useRef<THREE.Object3D>();
//   const mixer = useRef<THREE.AnimationMixer | undefined>();
//   const { camera } = useThree();
//   gltf.scene.position.set(0, 0, 0);

//   console.log(gltf.animations);

//   // Check if the model has animations
//   const hasAnimations = gltf.animations && gltf.animations.length > 0;

//   useFrame((state, delta) => {
//     if (mixer.current) {
//       mixer.current.update(delta);
//     }
//   });

//   mixer.current = new THREE.AnimationMixer(gltf.scene);

//   // Play all animations once
//   gltf.animations.forEach((clip) => {
//     const action = mixer.current!.clipAction(clip);

//     action.reset().play();
//   });

//   useEffect(() => {
//     const handleMouseMove = (event: MouseEvent) => {
//       // Calculate cursor's world position
//       const cursorPosition = new THREE.Vector3();
//       cursorPosition.x = (event.clientX / window.innerWidth) * 4 - 1;
//       cursorPosition.y = -(event.clientY / window.innerHeight) * 4 + 1;
//       cursorPosition.z = 0.5; // Depth of cursor in view space
//       cursorPosition.unproject(camera);

//       // Make the model look at the cursor's position
//       if (modelRef.current) {
//         modelRef.current.lookAt(cursorPosition);
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [camera]);

//   return (
//     <mesh scale={0.02}>
//       <primitive object={gltf.scene} ref={modelRef} dispose={null} />
//     </mesh>
//   );
// };

export default function Scene() {
  return (
    <div className='w-full h-[110vh] bg-black relative'>
      <Canvas>
        <Suspense fallback={null}>
          <Environment files='/Env/venice_sunset_1k.hdr' />
          <Model />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
}
