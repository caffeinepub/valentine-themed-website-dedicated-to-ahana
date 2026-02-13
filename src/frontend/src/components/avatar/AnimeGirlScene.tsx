import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import type { AnimationState } from '@/hooks/useAvatarAnimationState';

interface AnimeGirlSceneProps {
  animationState: AnimationState;
}

export function AnimeGirlScene({ animationState }: AnimeGirlSceneProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
      <pointLight position={[-5, 3, -5]} intensity={0.4} color="#ffd4a3" />
      
      <AnimeGirl animationState={animationState} reducedMotion={prefersReducedMotion} />
      
      <Environment preset="sunset" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
}

interface AnimeGirlProps {
  animationState: AnimationState;
  reducedMotion: boolean;
}

function AnimeGirl({ animationState, reducedMotion }: AnimeGirlProps) {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const leftEyeRef = useRef<THREE.Mesh>(null);
  const rightEyeRef = useRef<THREE.Mesh>(null);
  const mouthRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Mesh>(null);
  const rightArmRef = useRef<THREE.Mesh>(null);
  
  const timeRef = useRef(0);
  const blinkTimer = useRef(0);
  const emotionTimer = useRef(0);

  useFrame((state, delta) => {
    if (reducedMotion) return;
    
    timeRef.current += delta;
    blinkTimer.current += delta;
    emotionTimer.current += delta;

    // Idle breathing animation
    if (groupRef.current && animationState === 'idle') {
      groupRef.current.position.y = Math.sin(timeRef.current * 1.5) * 0.05;
    }

    // Talking animation - head bob and mouth movement
    if (animationState === 'talking' && headRef.current && mouthRef.current) {
      headRef.current.rotation.z = Math.sin(timeRef.current * 8) * 0.05;
      mouthRef.current.scale.y = 0.3 + Math.abs(Math.sin(timeRef.current * 10)) * 0.4;
    } else if (mouthRef.current) {
      mouthRef.current.scale.y = 0.3;
    }

    // Happy animation - bouncing
    if (animationState === 'happy' && groupRef.current) {
      groupRef.current.position.y = Math.abs(Math.sin(timeRef.current * 4)) * 0.2;
      groupRef.current.rotation.z = Math.sin(timeRef.current * 4) * 0.1;
    }

    // Sad animation - slight droop
    if (animationState === 'sad' && headRef.current) {
      headRef.current.rotation.x = -0.2;
      headRef.current.position.y = -0.1;
    } else if (headRef.current && animationState !== 'talking') {
      headRef.current.rotation.x = 0;
      headRef.current.position.y = 0;
    }

    // Excited animation - energetic movement
    if (animationState === 'excited') {
      if (groupRef.current) {
        groupRef.current.rotation.y = Math.sin(timeRef.current * 3) * 0.2;
      }
      if (leftArmRef.current && rightArmRef.current) {
        leftArmRef.current.rotation.z = Math.sin(timeRef.current * 6) * 0.5 + 0.3;
        rightArmRef.current.rotation.z = -Math.sin(timeRef.current * 6) * 0.5 - 0.3;
      }
    } else if (leftArmRef.current && rightArmRef.current) {
      leftArmRef.current.rotation.z = 0.3;
      rightArmRef.current.rotation.z = -0.3;
    }

    // Blinking animation
    if (blinkTimer.current > 3) {
      blinkTimer.current = 0;
      if (leftEyeRef.current && rightEyeRef.current) {
        leftEyeRef.current.scale.y = 0.1;
        rightEyeRef.current.scale.y = 0.1;
        setTimeout(() => {
          if (leftEyeRef.current && rightEyeRef.current) {
            leftEyeRef.current.scale.y = 1;
            rightEyeRef.current.scale.y = 1;
          }
        }, 100);
      }
    }
  });

  // Skin tone - light peachy
  const skinColor = new THREE.Color(0xffd4a3);
  // Hair color - dark brown/black
  const hairColor = new THREE.Color(0x2d1b00);
  // Eye color - dark brown
  const eyeColor = new THREE.Color(0x3d2817);
  // Outfit color - cute pink
  const outfitColor = new THREE.Color(0xffb3d9);

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Body */}
      <mesh position={[0, 0, 0]} castShadow>
        <capsuleGeometry args={[0.4, 0.8, 16, 32]} />
        <meshStandardMaterial color={outfitColor} />
      </mesh>

      {/* Head */}
      <mesh ref={headRef} position={[0, 1.2, 0]} castShadow>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color={skinColor} />
      </mesh>

      {/* Hair - top bun style */}
      <mesh position={[0, 1.5, 0]} castShadow>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color={hairColor} />
      </mesh>
      
      {/* Hair - side bangs */}
      <mesh position={[-0.25, 1.3, 0.2]} rotation={[0, 0, 0.3]} castShadow>
        <coneGeometry args={[0.15, 0.4, 8]} />
        <meshStandardMaterial color={hairColor} />
      </mesh>
      <mesh position={[0.25, 1.3, 0.2]} rotation={[0, 0, -0.3]} castShadow>
        <coneGeometry args={[0.15, 0.4, 8]} />
        <meshStandardMaterial color={hairColor} />
      </mesh>

      {/* Eyes */}
      <mesh ref={leftEyeRef} position={[-0.12, 1.25, 0.3]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color={eyeColor} />
      </mesh>
      <mesh ref={rightEyeRef} position={[0.12, 1.25, 0.3]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color={eyeColor} />
      </mesh>

      {/* Eye highlights */}
      <mesh position={[-0.1, 1.27, 0.35]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.14, 1.27, 0.35]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.5} />
      </mesh>

      {/* Mouth */}
      <mesh ref={mouthRef} position={[0, 1.1, 0.32]} scale={[1, 0.3, 1]}>
        <sphereGeometry args={[0.08, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#ff6b9d" />
      </mesh>

      {/* Blush */}
      <mesh position={[-0.25, 1.15, 0.28]} rotation={[0, 0.3, 0]}>
        <circleGeometry args={[0.08, 16]} />
        <meshStandardMaterial color="#ffb3c1" transparent opacity={0.6} />
      </mesh>
      <mesh position={[0.25, 1.15, 0.28]} rotation={[0, -0.3, 0]}>
        <circleGeometry args={[0.08, 16]} />
        <meshStandardMaterial color="#ffb3c1" transparent opacity={0.6} />
      </mesh>

      {/* Arms */}
      <mesh ref={leftArmRef} position={[-0.5, 0.3, 0]} rotation={[0, 0, 0.3]} castShadow>
        <capsuleGeometry args={[0.1, 0.6, 8, 16]} />
        <meshStandardMaterial color={skinColor} />
      </mesh>
      <mesh ref={rightArmRef} position={[0.5, 0.3, 0]} rotation={[0, 0, -0.3]} castShadow>
        <capsuleGeometry args={[0.1, 0.6, 8, 16]} />
        <meshStandardMaterial color={skinColor} />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.15, -0.8, 0]} castShadow>
        <capsuleGeometry args={[0.12, 0.7, 8, 16]} />
        <meshStandardMaterial color={skinColor} />
      </mesh>
      <mesh position={[0.15, -0.8, 0]} castShadow>
        <capsuleGeometry args={[0.12, 0.7, 8, 16]} />
        <meshStandardMaterial color={skinColor} />
      </mesh>

      {/* Shoes */}
      <mesh position={[-0.15, -1.2, 0.05]} castShadow>
        <boxGeometry args={[0.18, 0.1, 0.25]} />
        <meshStandardMaterial color="#ff1493" />
      </mesh>
      <mesh position={[0.15, -1.2, 0.05]} castShadow>
        <boxGeometry args={[0.18, 0.1, 0.25]} />
        <meshStandardMaterial color="#ff1493" />
      </mesh>
    </group>
  );
}
