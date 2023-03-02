import { Canvas } from '@react-three/fiber';
const rtf = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#000' }}>
      <Canvas camera={{ fov: 75, position: [0, 0, 10], near: 0.5 }}>
        <ambientLight color={0xffffff} />
        <spotLight position={[2, 5, 10]} />
        <mesh>
          <sphereGeometry args={[3, 32, 32, 0, Math.PI * 2, 0, Math.PI]} />
          <meshStandardMaterial color={0x404040} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default rtf;
