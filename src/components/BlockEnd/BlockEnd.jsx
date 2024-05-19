import { boxGeometry, floor1Material } from '../../utils/constants';
import { RigidBody } from '@react-three/rapier';
import { Text, useGLTF } from '@react-three/drei';

const BlockEnd = ({ position = [0, 0, 0] }) => {
  const hamburger = useGLTF('/hamburger.glb');

  hamburger.scene.children.forEach((mesh) => {
    mesh.castShadow = true;
  });

  return (
    <group position={position}>
      <Text
        font='/bebas-neue-v9-latin-regular.woff'
        scale={1}
        position={[0, 2.25, 2]}
      >
        FINISH
        <meshBasicMaterial toneMapped={false} />
      </Text>
      <mesh
        geometry={boxGeometry}
        material={floor1Material}
        position={[0, 0, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      />
      <RigidBody
        type='fixed'
        colliders='hull'
        position={[0, 0.25, 0]}
        restitution={0.2}
        friction={0}
      >
        <primitive object={hamburger.scene} scale={0.2} />
      </RigidBody>
    </group>
  );
};
export default BlockEnd;
