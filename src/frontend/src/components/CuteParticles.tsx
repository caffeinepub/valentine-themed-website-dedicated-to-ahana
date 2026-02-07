import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  type: 'heart' | 'sparkle';
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export default function CuteParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    // Generate mixed particles (hearts and sparkles)
    const newParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      type: i % 3 === 0 ? 'sparkle' : 'heart',
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 10 + Math.random() * 6,
      size: 16 + Math.random() * 16
    }));
    setParticles(newParticles);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bottom-0 animate-float-particle opacity-40"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            fontSize: `${particle.size}px`
          }}
        >
          {particle.type === 'heart' ? '💛' : (
            <img 
              src="/assets/generated/sparkle-particles.dim_256x256.png" 
              alt="" 
              className="w-full h-full object-contain"
              style={{ width: `${particle.size}px`, height: `${particle.size}px` }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
