// src/components/ThreeScene.jsx
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

function Model() {
  const gltf = useLoader(GLTFLoader, '/models/neon_valo.glb');
  return <primitive object={gltf.scene} />;
}

const ThreeScene = () => {
  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls />
      <Suspense>
        <Model />
      </Suspense>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 1, 0]} />
    </Canvas>
  );
};

export default ThreeScene;