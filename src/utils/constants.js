import * as THREE from 'three';

export const keyboardKeys = [
  { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
  { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
  { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
  { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
  { name: 'jump', keys: ['Space'] },
];

export const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

export const floor1Material = new THREE.MeshStandardMaterial({
  color: 'limegreen',
});
export const floor2Material = new THREE.MeshStandardMaterial({
  color: 'greenyellow',
});
export const obstacleMaterial = new THREE.MeshStandardMaterial({
  color: 'orangered',
});
export const wallMaterial = new THREE.MeshStandardMaterial({
  color: 'slategrey',
});
