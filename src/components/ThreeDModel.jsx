// src/components/ThreeDModel.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';

function Model({ url }) {
  const gltf = useGLTF(url);
  return <primitive object={gltf.scene} />;
}

const ThreeDModel = () => {
  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls />
      <Suspense fallback={<div>Loading...</div>}>
        <Model url="/models/neon_valo.glb" />
        <Html>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <h2>Model 3D</h2>
            <p>This is a 3D model.</p>
          </div>
        </Html>
      </Suspense>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 1, 0]} />
    </Canvas>
  );
};

export default ThreeDModel;