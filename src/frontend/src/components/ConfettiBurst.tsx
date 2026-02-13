import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function ConfettiBurst() {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
        <div className="text-6xl">🎉</div>
      </div>
    );
  }

  const confetti = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 0.5}s`,
    duration: `${2 + Math.random() * 2}s`,
    color: ['#ff69b4', '#ff1493', '#ff6b9d', '#ffc0cb', '#ffb6c1', '#ff85a2'][Math.floor(Math.random() * 6)],
    shape: ['●', '■', '▲', '★', '♥'][Math.floor(Math.random() * 5)]
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute -top-10 animate-confetti-fall text-2xl font-bold"
          style={{
            left: piece.left,
            animationDelay: piece.delay,
            animationDuration: piece.duration,
            color: piece.color,
            // @ts-ignore - CSS custom properties
            '--duration': piece.duration
          }}
        >
          {piece.shape}
        </div>
      ))}
      <img 
        src="/assets/generated/confetti-doodle.dim_1200x400.png"
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl opacity-30 animate-gentle-pulse"
      />
    </div>
  );
}
