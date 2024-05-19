import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Game from './components/Game/Game.jsx';
import { KeyboardControls } from '@react-three/drei';
import Interface from './components/Interface/Interface.jsx';
import { keyboardKeys } from './utils/constants.js';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <KeyboardControls map={keyboardKeys}>
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [2.5, 4, 6],
      }}
    >
      <Game />
    </Canvas>
    <Interface />
  </KeyboardControls>
);
