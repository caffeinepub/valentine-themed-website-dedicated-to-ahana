import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ConfettiBurst from './ConfettiBurst';

export default function SimpleProposalMoment() {
  const [response, setResponse] = useState<'none' | 'yes' | 'no'>('none');
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noAttempts, setNoAttempts] = useState(0);

  const handleYes = () => {
    setResponse('yes');
  };

  const handleNoHover = () => {
    setNoAttempts(prev => prev + 1);
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  if (response === 'yes') {
    return (
      <>
        <ConfettiBurst />
        <Card className="max-w-2xl mx-auto bg-card/95 backdrop-blur shadow-glow-lg border-2 border-primary">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <img 
                src="/assets/generated/ring-icon.dim_256x256.png"
                alt="Ring"
                className="w-24 h-24 animate-gentle-pulse"
              />
            </div>
            <CardTitle className="text-3xl sm:text-4xl font-script text-primary">
              Yes! 🎉
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-xl sm:text-2xl font-display">
              Ahana & Suvo - Forever Together! 💕
            </p>
            <p className="text-lg text-muted-foreground">
              You've made this the best Valentine's Day ever, Ahana!
              I promise to cherish every moment we share together.
            </p>
            <p className="text-sm text-muted-foreground font-script">
              — Suvo
            </p>
          </CardContent>
        </Card>
      </>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto bg-card/95 backdrop-blur shadow-glow">
      <CardHeader className="text-center space-y-4">
        <div className="flex justify-center">
          <img 
            src="/assets/generated/heart-icon.dim_128x128.png"
            alt="Heart"
            className="w-20 h-20 animate-heartbeat"
          />
        </div>
        <CardTitle className="text-3xl sm:text-5xl font-script text-primary">
          Ahana, will you be my Valentine?
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        <p className="text-lg sm:text-xl text-muted-foreground">
          You mean everything to me, Ahana. Let's make this Valentine's Day unforgettable!
          Ahana & Suvo, together forever! 💕
        </p>
        <div className="relative min-h-[120px] flex items-center justify-center">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              onClick={handleYes}
              className="text-lg px-8 py-6 shadow-glow hover:shadow-glow-lg transition-all"
            >
              <Heart className="w-5 h-5 mr-2" fill="currentColor" />
              Yes! 💖
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              className="text-lg px-8 py-6 transition-all"
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            >
              No
            </Button>
          </div>
        </div>
        {noAttempts > 0 && (
          <p className="text-sm text-muted-foreground italic animate-in fade-in">
            {noAttempts === 1 && "Hey! That button is shy... 😊"}
            {noAttempts === 2 && "It really doesn't want to be clicked, Ahana! 😄"}
            {noAttempts >= 3 && "You know there's only one right answer! 💕"}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
