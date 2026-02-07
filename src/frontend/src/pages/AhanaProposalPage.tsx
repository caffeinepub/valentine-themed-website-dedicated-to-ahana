import { Heart } from 'lucide-react';
import CuteParticles from '@/components/CuteParticles';
import SimpleProposalMoment from '@/components/SimpleProposalMoment';

export default function AhanaProposalPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <CuteParticles />
      
      {/* Hero Section with Photo */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-peach-light/95 via-coral-light/90 to-sunset-light/95 dark:from-peach-dark/95 dark:via-coral-dark/90 dark:to-sunset-dark/95" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
          <div className="inline-flex items-center justify-center mb-8">
            <img 
              src="/assets/photos/IMG_3752.jpeg" 
              alt="A cozy couple photo" 
              className="max-w-md w-full h-auto rounded-3xl shadow-2xl animate-gentle-float object-cover"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-coral-accent dark:text-coral-accent-light tracking-tight drop-shadow-lg font-display">
            Hey Ahana 💛
          </h1>
          
          <p className="text-2xl md:text-3xl text-sunset-accent dark:text-sunset-accent-light font-medium max-w-2xl mx-auto leading-relaxed">
            I've been thinking about this for a while, and I just have to ask you something special...
          </p>
        </div>
      </section>

      {/* Message Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-coral-light to-sunset-light dark:from-coral-dark dark:to-sunset-dark">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center justify-center mb-8">
              <img 
                src="/assets/photos/IMG_3753.jpeg" 
                alt="A sweet moment together" 
                className="max-w-sm w-full h-auto rounded-3xl shadow-2xl object-cover"
              />
            </div>
            
            <div className="space-y-6 text-xl md:text-2xl text-foreground leading-relaxed">
              <p className="font-medium">
                Every moment with you feels like magic. Your smile lights up my world, 
                your laugh is my favorite sound, and being with you just feels... right.
              </p>
              
              <p>
                You make ordinary days extraordinary, and you've shown me what it means 
                to truly care about someone. I can't imagine my days without you in them.
              </p>
              
              <p className="text-coral-accent dark:text-coral-accent-light font-semibold text-3xl pt-6">
                So here's my question...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proposal Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-sunset-light to-peach-light dark:from-sunset-dark dark:to-peach-dark">
        <div className="max-w-2xl mx-auto">
          <SimpleProposalMoment />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-10 px-4 bg-peach-light dark:bg-peach-dark border-t border-coral-border dark:border-coral-border-dark">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-foreground text-lg">
            © 2026. Built with <Heart className="inline w-5 h-5 text-coral-accent" fill="currentColor" /> using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-coral-accent transition-colors font-semibold"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
