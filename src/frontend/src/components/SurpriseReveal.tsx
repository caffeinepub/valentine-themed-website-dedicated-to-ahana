import { useState } from 'react';
import { Mail, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function SurpriseReveal() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <Card className="max-w-2xl mx-auto bg-card/90 backdrop-blur shadow-glow overflow-hidden">
      <CardContent className="p-8">
        {!isRevealed ? (
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <img 
                src="/assets/generated/envelope-illustration.dim_900x600.png"
                alt="Envelope"
                className="w-48 h-48 object-contain"
              />
            </div>
            <h3 className="text-2xl font-script text-primary">
              A Secret Message for Ahana
            </h3>
            <p className="text-muted-foreground">
              Suvo has hidden a special surprise just for you...
            </p>
            <Button 
              size="lg"
              onClick={() => setIsRevealed(true)}
              className="shadow-glow hover:shadow-glow-lg transition-all"
            >
              <Mail className="w-5 h-5 mr-2" />
              Open the Envelope
            </Button>
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-center">
              <Heart className="w-16 h-16 text-primary animate-heartbeat" fill="currentColor" />
            </div>
            <div className="bg-accent/20 rounded-2xl p-6 space-y-4">
              <h3 className="text-2xl font-script text-primary text-center">
                My Dearest Ahana,
              </h3>
              <p className="text-lg leading-relaxed">
                Every day I wake up grateful that you're in my life. Your smile is my sunshine, 
                your laughter is my favorite song, and your love is my greatest treasure.
              </p>
              <p className="text-lg leading-relaxed">
                Ahana, you've made me believe in magic again. With you, every moment is special, 
                every day is an adventure, and every tomorrow is something to look forward to.
              </p>
              <p className="text-lg leading-relaxed">
                This Valentine's Day, I want you to know that my heart belongs to you, now and always. 
                Ahana & Suvo - our story is just beginning, and I can't wait to write every chapter with you.
              </p>
              <p className="text-xl font-script text-primary text-right">
                Forever and always,<br />
                Your Suvo 💕
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
