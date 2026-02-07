import { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  rotation: number;
  color: string;
}

export default function ConfettiBurst() {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    if (mediaQuery.matches) {
      return;
    }

    const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#FF8DC7'];
    
    // Generate confetti burst
    const newConfetti: ConfettiPiece[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: 20 + Math.random() * 60,
      delay: Math.random() * 0.3,
      duration: 2 + Math.random() * 1,
      rotation: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    
    setConfetti(newConfetti);

    // Clear confetti after animation
    const timer = setTimeout(() => {
      setConfetti([]);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (prefersReducedMotion || confetti.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute top-0 animate-confetti-fall"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            transform: `rotate(${piece.rotation}deg)`
          }}
        >
          <div
            className="w-3 h-3 rounded-sm"
            style={{ backgroundColor: piece.color }}
          />
        </div>
      ))}
    </div>
  );
}
