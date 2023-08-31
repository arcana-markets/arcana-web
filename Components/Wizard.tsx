import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Model = () => {
  const gltf = useGLTF("/Wizard.glb", true);
  const modelRef = useRef<THREE.Object3D>();
  const mixer = useRef<THREE.AnimationMixer>();

  useFrame((state, delta) => {
    if (mixer) {
      mixer?.current?.update(0.015);
    }
    // Make the model look at the cursor's position
    if (modelRef.current) {
      modelRef.current.rotation.y = THREE.MathUtils.lerp(
        modelRef.current.rotation.y,
        state.pointer.x * 0.65,
        0.02
      );
      modelRef.current.rotation.x = THREE.MathUtils.lerp(
        modelRef.current.rotation.x,
        -state.pointer.y * 0.65,
        0.02
      );
    }
  });

  useEffect(() => {
    if (modelRef.current) {
      mixer.current = new THREE.AnimationMixer(gltf.scene);

      gltf.animations.forEach((clip) => {
        const action = mixer?.current?.clipAction(clip);
        action!.setLoop(THREE.LoopOnce, 1);
        action!.clampWhenFinished = true;
        action?.play();
      });
    }
  }, [modelRef]);

  return (
    <mesh scale={0.02} position={[0, 0, 1.5]}>
      <primitive object={gltf.scene} ref={modelRef} dispose={null} />
    </mesh>
  );
};

export default Model;
