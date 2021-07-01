import './App.css';
import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls, Stars } from '@react-three/drei';
import Button from '@material-ui/core/Button';
import introPic from './Images/ayyitsme.PNG';
import githubPic from './Images/githubLogo.png';
import uosPic from './Images/uosLogo.png';
import gunfirePic from './Images/gunfire.PNG';
import missing from './Images/missingContent.png';

function App() {
  const [active, setActive] = useState('');

  function IntroBox() {
    const [hovered, setHovered] = useState(false);
    const texture = THREE.ImageUtils.loadTexture(introPic);
    const mesh = useRef();

    return (
      <mesh
        ref={mesh}
        position={[0, 0, 0]}
        onClick={() => (active === 'Intro' ? setActive('') : setActive('Intro'))}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? [1.05, 1.05, 1.05] : [1, 1, 1]}
      >
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial map={texture} attach="material" color={hovered ? 'yellow' : 'white'} />
      </mesh>
    );
  }

  function GithubBox() {
    const [hovered, setHovered] = useState(false);
    const texture = THREE.ImageUtils.loadTexture(githubPic);
    const mesh = useRef();

    return (
      <mesh
        ref={mesh}
        position={[2, -0.5, -0.5]}
        onClick={() => (active === 'GitHub' ? setActive('') : setActive('GitHub'))}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? [1.05, 1.05, 1.05] : [1, 1, 1]}
      >
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial map={texture} attach="material" color={hovered ? 'yellow' : 'white'} />
      </mesh>
    );
  }

  function EduBox() {
    const [hovered, setHovered] = useState(false);
    const texture = THREE.ImageUtils.loadTexture(uosPic);
    const mesh = useRef();

    return (
      <mesh
        ref={mesh}
        position={[-2, -0.5, -0.5]}
        onClick={() => (active === 'Education' ? setActive('') : setActive('Education'))}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? [1.05, 1.05, 1.05] : [1, 1, 1]}
      >
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial map={texture} attach="material" color={hovered ? 'yellow' : 'white'} />
      </mesh>
    );
  }

  function MainProjectBox() {
    const [hovered, setHovered] = useState(false);
    const texture = THREE.ImageUtils.loadTexture(gunfirePic);
    const mesh = useRef();

    return (
      <mesh
        ref={mesh}
        position={[-4, -1, -1]}
        onClick={() => (active === 'Main' ? setActive('') : setActive('Main'))}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? [1.05, 1.05, 1.05] : [1, 1, 1]}
      >
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial map={texture} attach="material" color={hovered ? 'yellow' : 'white'} />
      </mesh>
    );
  }

  function CommissionsBox() {
    const [hovered, setHovered] = useState(false);
    const texture = THREE.ImageUtils.loadTexture(missing);
    const mesh = useRef();

    return (
      <mesh
        ref={mesh}
        position={[4, -1, -1]}
        onClick={() => (active === 'Com' ? setActive('') : setActive('Com'))}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? [1.05, 1.05, 1.05] : [1, 1, 1]}
      >
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial map={texture} attach="material" color={hovered ? 'yellow' : 'white'} />
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
          <GithubBox />
          <EduBox />
          <MainProjectBox />
          <CommissionsBox />
        </Canvas>
      </div>
      <div className="App-header">
        <header>
          Alex Chappell:Three JS Portfolio (Click and drag to rotate, Scroll to Zoom)
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
        { active === 'GitHub' && (
        <p>
          Github:
          <br />
          Most the projects I currently do are made public. All the code for these can be found at https://github.com/Chappll
        </p>
        )}
        { active === 'Education' && (
        <p>
          Education:
          <br />
          University Of Sussex Brighton,
          <br />
          Bachelor of Science Computer Science – 2:2 grade
          <br />
          <br />
          2017 Brockenhurst College
          <br />
          A Level Maths - A
          <br />
          A Level Computer Science - B
          <br />
          A Level Physics - C
        </p>
        )}
        { active === 'Main' && (
        <div>
          <p>
            Current Main Project:
            <br />
            GunfireDPS - a data visualisation app for one of my favourite games.
            Check it out at
          </p>
          <Button variant="outlined" color="primary" onClick={() => window.open('https://www.gunfireDps.com', '_blank')}> Visit Gunfire Dps</Button>
        </div>
        )}
        { active === 'Com' && (
        <p>
          Nothing yet for this section, will be changed later :)
        </p>
        )}
      </div>

    </div>
  );
}

export default App;
