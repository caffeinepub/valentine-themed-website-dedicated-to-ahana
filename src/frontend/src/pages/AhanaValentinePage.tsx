import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FloatingHearts from '@/components/FloatingHearts';
import CuteParticles from '@/components/CuteParticles';
import ConfettiBurst from '@/components/ConfettiBurst';
import ProposalStepFlow from '@/components/ProposalStepFlow';
import SurpriseReveal from '@/components/SurpriseReveal';

type ValentineTheme = 'cute-pink' | 'floating-hearts' | 'anime' | 'elegant-red';

export default function AhanaValentinePage() {
  const [theme, setTheme] = useState<ValentineTheme>('cute-pink');
  const [showConfetti, setShowConfetti] = useState(false);

  const handleAcceptance = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      data-valentine-theme={theme}
      style={{
        backgroundImage: 'url(/assets/generated/ahana-bg.dim_1920x1080.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background overlay for better readability */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      {/* Decorative animations */}
      {(theme === 'cute-pink' || theme === 'floating-hearts') && <FloatingHearts />}
      {(theme === 'floating-hearts' || theme === 'anime') && <CuteParticles />}
      {showConfetti && <ConfettiBurst />}

      {/* Main content */}
      <div className="relative z-10">
        {/* Header with theme selector */}
        <header className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Heart className="w-8 h-8 text-primary animate-heartbeat" fill="currentColor" />
              <h1 className="text-2xl sm:text-3xl font-bold font-script text-primary">
                Ahana & Suvo
              </h1>
            </div>
            
            <Tabs value={theme} onValueChange={(v) => setTheme(v as ValentineTheme)}>
              <TabsList className="bg-card/80 backdrop-blur">
                <TabsTrigger value="cute-pink" className="text-xs sm:text-sm">
                  💕 Cute Pink
                </TabsTrigger>
                <TabsTrigger value="floating-hearts" className="text-xs sm:text-sm">
                  💖 Hearts & Sparkles
                </TabsTrigger>
                <TabsTrigger value="anime" className="text-xs sm:text-sm">
                  🌸 Anime
                </TabsTrigger>
                <TabsTrigger value="elegant-red" className="text-xs sm:text-sm">
                  🌹 Elegant Red
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </header>

        {/* Hero section */}
        <section className="container mx-auto px-4 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="relative inline-block">
              <img 
                src="/assets/generated/ahana-hero-illustration.dim_1200x800.png"
                alt="Ahana & Suvo"
                className="w-full max-w-md mx-auto rounded-3xl shadow-glow-lg"
              />
              {theme === 'anime' && (
                <img 
                  src="/assets/generated/chibi-couple.dim_900x600.png"
                  alt="Chibi couple"
                  className="absolute -bottom-8 -right-8 w-32 h-32 object-contain animate-gentle-pulse"
                />
              )}
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-bold font-script text-primary mt-8">
              Happy Valentine's Day!
            </h2>
            
            <p className="text-xl sm:text-2xl text-muted-foreground font-display">
              From Suvo, with all my love ❤️
            </p>
          </div>
        </section>

        {/* Love letter section */}
        <section className="container mx-auto px-4 py-8">
          <Card className="max-w-3xl mx-auto bg-card/90 backdrop-blur shadow-glow">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-script text-center text-primary">
                To My Dearest Ahana
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-base sm:text-lg leading-relaxed">
              <p>
                Every moment with you feels like a beautiful dream. Your smile lights up my world, 
                and your laughter is the sweetest melody I've ever heard.
              </p>
              <p>
                From the first time we met, I knew you were special. You've brought so much joy, 
                warmth, and love into my life. With you, every day is Valentine's Day.
              </p>
              <p className="text-right font-script text-xl text-primary">
                Forever yours,<br />
                Suvo 💕
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Surprise reveal section */}
        <section className="container mx-auto px-4 py-8">
          <SurpriseReveal />
        </section>

        {/* Reasons section */}
        <section className="container mx-auto px-4 py-8">
          <Card className="max-w-3xl mx-auto bg-card/90 backdrop-blur shadow-glow">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-script text-center text-primary">
                Why Ahana & Suvo Are Perfect Together
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: '💖', text: 'Your smile makes my heart skip a beat' },
                  { icon: '✨', text: 'Every moment with you is magical' },
                  { icon: '🌟', text: 'You inspire me to be my best self' },
                  { icon: '💕', text: 'Your kindness touches my soul' },
                  { icon: '🎵', text: 'We create beautiful memories together' },
                  { icon: '🌈', text: 'You bring color to my world' }
                ].map((reason, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-accent/20 hover:bg-accent/30 transition-colors"
                  >
                    <span className="text-2xl">{reason.icon}</span>
                    <p className="text-sm sm:text-base">{reason.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Proposal section */}
        <section className="container mx-auto px-4 py-12">
          <ProposalStepFlow onAccept={handleAcceptance} />
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <div className="flex flex-col items-center gap-2">
            <p className="flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-primary animate-heartbeat" fill="currentColor" /> 
              for Ahana & Suvo
            </p>
            <p>
              © {new Date().getFullYear()} • Built with love using{' '}
              <a 
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
