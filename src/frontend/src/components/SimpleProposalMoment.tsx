import { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ConfettiBurst from './ConfettiBurst';

type Step = 'ask' | 'celebration';

export default function SimpleProposalMoment() {
  const [step, setStep] = useState<Step>('ask');
  const [showConfetti, setShowConfetti] = useState(false);

  const handleYes = () => {
    setStep('celebration');
    setShowConfetti(true);
  };

  const handleReset = () => {
    setStep('ask');
    setShowConfetti(false);
  };

  return (
    <>
      {showConfetti && <ConfettiBurst />}
      
      <Card className="border-sunset-border dark:border-sunset-border-dark shadow-2xl bg-white/95 dark:bg-sunset-card-dark backdrop-blur-sm">
        <CardHeader className="text-center space-y-6 pb-8">
          <div className="flex justify-center">
            <Heart className="w-20 h-20 text-coral-accent animate-pulse" fill="currentColor" />
          </div>
          <CardTitle className="text-4xl md:text-5xl text-coral-accent dark:text-coral-accent-light font-display leading-tight">
            {step === 'ask' && 'Ahana, Will You Be My Girlfriend?'}
            {step === 'celebration' && 'She Said Yes! 🎉'}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-8">
          {step === 'ask' && (
            <div className="space-y-8">
              <p className="text-center text-xl md:text-2xl text-foreground leading-relaxed font-medium">
                I promise to make you smile every day, support your dreams, 
                and be your partner in every adventure. 
              </p>
              <p className="text-center text-lg text-muted-foreground italic">
                What do you say? 💛
              </p>
              <div className="flex justify-center pt-4">
                <Button
                  size="lg"
                  onClick={handleYes}
                  className="text-3xl px-20 py-10 bg-gradient-to-r from-coral-accent to-sunset-accent hover:from-coral-accent/90 hover:to-sunset-accent/90 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 rounded-3xl"
                >
                  <Sparkles className="w-10 h-10 mr-4" />
                  Yes! 💛
                  <Sparkles className="w-10 h-10 ml-4" />
                </Button>
              </div>
            </div>
          )}

          {step === 'celebration' && (
            <div className="space-y-8 animate-in fade-in zoom-in duration-700">
              <div className="text-center text-8xl mb-6">🎉💛✨🎊💕</div>
              <div className="space-y-6 text-center">
                <p className="text-4xl font-bold text-coral-accent dark:text-coral-accent-light font-display">
                  Ahana & Suvo
                </p>
                <p className="text-3xl text-sunset-accent dark:text-sunset-accent-light font-medium">
                  Together! 💛
                </p>
                <p className="text-2xl text-foreground leading-relaxed max-w-2xl mx-auto pt-4">
                  You just made me the happiest person in the world! 
                  I can't wait for all the amazing moments ahead of us. 
                  Thank you for saying yes, Ahana! 🥰
                </p>
                <div className="pt-8">
                  <p className="text-xl text-muted-foreground italic">
                    Now let's go celebrate! 🎉
                  </p>
                </div>
              </div>
              <div className="flex justify-center pt-6">
                <Button
                  variant="ghost"
                  onClick={handleReset}
                  className="text-lg text-muted-foreground hover:text-foreground"
                >
                  ← See it again
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}
