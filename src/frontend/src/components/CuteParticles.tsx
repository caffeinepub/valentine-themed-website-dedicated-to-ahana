import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function CuteParticles() {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return null;
  }

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 3}s`,
    duration: `${1.5 + Math.random() * 1.5}s`,
    size: `${12 + Math.random() * 12}px`,
    emoji: ['✨', '⭐', '💫', '🌟'][Math.floor(Math.random() * 4)]
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-sparkle"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            fontSize: particle.size,
            // @ts-ignore - CSS custom properties
            '--duration': particle.duration
          }}
        >
          {particle.emoji}
        </div>
      ))}
    </div>
  );
}
