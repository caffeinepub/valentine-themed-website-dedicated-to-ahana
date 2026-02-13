import { useState } from 'react';
import { Heart, Sparkles, Gift, PartyPopper } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProposalStepFlowProps {
  onAccept: () => void;
}

export default function ProposalStepFlow({ onAccept }: ProposalStepFlowProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAccepted, setIsAccepted] = useState(false);

  const steps = [
    {
      icon: Heart,
      title: 'A Question for Ahana',
      content: 'Ahana, you make every day brighter. I have something special to ask you...',
      action: 'Continue',
      color: 'text-valentine-pink'
    },
    {
      icon: Sparkles,
      title: 'You & Me',
      content: 'Together, Ahana and Suvo create magic. Every moment with you is a treasure.',
      action: 'Next',
      color: 'text-valentine-peach'
    },
    {
      icon: Gift,
      title: 'A Special Day',
      content: 'Today is Valentine\'s Day, and there\'s no one else I\'d rather spend it with than you, Ahana.',
      action: 'Almost there...',
      color: 'text-valentine-rose'
    },
    {
      icon: PartyPopper,
      title: 'The Big Question',
      content: 'So, my dearest Ahana...',
      action: 'Ask me!',
      color: 'text-valentine-lavender'
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Show the final proposal
      setCurrentStep(steps.length);
    }
  };

  const handleAccept = () => {
    setIsAccepted(true);
    onAccept();
  };

  if (isAccepted) {
    return (
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
            This Valentine's Day marks the beginning of our beautiful journey together.
            Thank you for making me the happiest person alive, Ahana!
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            <Badge variant="secondary" className="text-lg px-4 py-2">💖 Ahana</Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">❤️</Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">💖 Suvo</Badge>
          </div>
          <p className="text-sm text-muted-foreground font-script">
            — With all my love, Suvo
          </p>
        </CardContent>
      </Card>
    );
  }

  if (currentStep === steps.length) {
    return (
      <Card className="max-w-2xl mx-auto bg-card/95 backdrop-blur shadow-glow-lg border-2 border-primary">
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
            You mean the world to me, and I want to celebrate this special day with you.
            Ahana & Suvo, together forever! 💕
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={handleAccept}
              className="text-lg px-8 py-6 shadow-glow hover:shadow-glow-lg transition-all"
            >
              <Heart className="w-5 h-5 mr-2" fill="currentColor" />
              Yes! 💖
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={handleAccept}
              className="text-lg px-8 py-6"
            >
              Absolutely Yes! 💕
            </Button>
          </div>
          <p className="text-sm text-muted-foreground italic">
            (There's only one right answer, Ahana! 😊)
          </p>
        </CardContent>
      </Card>
    );
  }

  const CurrentIcon = steps[currentStep].icon;

  return (
    <Card className="max-w-2xl mx-auto bg-card/95 backdrop-blur shadow-glow">
      <CardHeader className="text-center space-y-4">
        <div className="flex justify-center">
          <CurrentIcon className={`w-16 h-16 ${steps[currentStep].color}`} />
        </div>
        <div className="flex justify-center gap-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentStep 
                  ? 'w-8 bg-primary' 
                  : index < currentStep 
                  ? 'w-2 bg-primary/50' 
                  : 'w-2 bg-muted'
              }`}
            />
          ))}
        </div>
        <CardTitle className="text-2xl sm:text-3xl font-script text-primary">
          {steps[currentStep].title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
          {steps[currentStep].content}
        </p>
        <Button 
          size="lg"
          onClick={handleNext}
          className="text-lg px-8 py-6 shadow-glow hover:shadow-glow-lg transition-all"
        >
          {steps[currentStep].action}
        </Button>
      </CardContent>
    </Card>
  );
}
