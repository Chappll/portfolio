import './App.css';
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
// import { useSpring, animated } from 'react-spring/three';

function App() {
  const [active, setActive] = useState('Intro');
  function IntroBox() {
    const [hovered, setHovered] = useState(false);
    return (
      <mesh
        position={[0, 0, 0]}
        onClick={() => (active === 'Intro' ? setActive('') : setActive('Intro'))}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? [1.05, 1.05, 1.05] : [1, 1, 1]}
      >
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color={hovered ? 'yellow' : 'hotpink'} />
      </mesh>
    );
  }

  return (
    <div className="App">
      <div style={{ position: 'absolute', height: '100%', width: '100%' }}>
        <Canvas>
          <OrbitControls />
          <Stars />
          <ambientLight intensity={0.1} />
          <spotLight position={[10, 15, 10]} angle={0.3} />
          <IntroBox />
        </Canvas>
      </div>
      <div className="App-header">
        <header>
          Alex Chappell - Three JS Portfolio
        </header>
        { active === 'Intro' && (
        <p>
          I am a highly motivated software developer who thrives off of learning modern tech stacks
          and keeping updated with modern trends.
          Ive found myself enjoying frontend development in particular
          as I enjoy the UI/UX aspects and
          have continued to develop my skills in React since leaving University of Sussex.
          This project is my first time using Three JS.
        </p>
        )}
      </div>

    </div>
  );
}

export default App;
