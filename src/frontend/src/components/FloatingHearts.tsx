import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function FloatingHearts() {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return null;
  }

  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${8 + Math.random() * 4}s`,
    size: `${20 + Math.random() * 20}px`,
    driftX: `${-30 + Math.random() * 60}px`,
    rotate: `${-20 + Math.random() * 40}deg`,
    emoji: ['💕', '💖', '💗', '💝', '💞'][Math.floor(Math.random() * 5)]
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-0 animate-float-up"
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            fontSize: heart.size,
            // @ts-ignore - CSS custom properties
            '--drift-x': heart.driftX,
            '--rotate': heart.rotate,
            '--duration': heart.duration
          }}
        >
          {heart.emoji}
        </div>
      ))}
    </div>
  );
}
