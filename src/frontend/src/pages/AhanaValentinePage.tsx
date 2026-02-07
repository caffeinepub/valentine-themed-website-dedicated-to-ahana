import { useState } from 'react';
import { Heart, Sparkles, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FloatingHearts from '@/components/FloatingHearts';

export default function AhanaValentinePage() {
  const [response, setResponse] = useState<'yes' | 'no' | null>(null);

  const reasons = [
    'Your smile lights up my entire world',
    'The way you laugh makes everything better',
    'Your kindness and compassion inspire me every day',
    'You understand me like no one else ever has',
    'Every moment with you feels like a beautiful dream',
    'Your strength and courage amaze me constantly',
    'You make ordinary days feel extraordinary',
    'The way you care for others shows your beautiful heart'
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <FloatingHearts />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center px-4 py-20"
        style={{
          backgroundImage: 'url(/assets/generated/ahana-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/90 via-pink-50/80 to-rose-50/90 dark:from-rose-950/90 dark:via-pink-950/80 dark:to-rose-950/90" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center w-32 h-32 mb-6">
            <img 
              src="/assets/generated/heart-icon.dim_128x128.png" 
              alt="Heart" 
              className="w-full h-full object-contain animate-pulse"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-rose-600 dark:text-rose-400 tracking-tight">
            Ahana
          </h1>
          
          <p className="text-2xl md:text-3xl text-rose-800 dark:text-rose-300 font-light italic">
            My Forever Valentine
          </p>
          
          <div className="flex justify-center pt-8">
            <img 
              src="/assets/generated/ahana-hero-illustration.dim_1200x800.png" 
              alt="Love Letter" 
              className="max-w-md w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Love Letter Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-rose-50 to-pink-50 dark:from-rose-950 dark:to-pink-950">
        <div className="max-w-3xl mx-auto">
          <Card className="border-rose-200 dark:border-rose-800 shadow-xl bg-white/80 dark:bg-rose-900/30 backdrop-blur">
            <CardHeader className="text-center space-y-4">
              <div className="flex justify-center">
                <Mail className="w-12 h-12 text-rose-500" />
              </div>
              <CardTitle className="text-3xl md:text-4xl text-rose-700 dark:text-rose-300 font-serif">
                A Letter to You
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg text-rose-900 dark:text-rose-100 leading-relaxed">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-rose-600 first-letter:mr-1 first-letter:float-left">
                My dearest Ahana, words cannot fully capture what you mean to me. 
                From the moment you came into my life, everything changed. The world 
                became brighter, more colorful, and filled with endless possibilities.
              </p>
              
              <p>
                You are my best friend, my confidant, my partner in all adventures. 
                Your presence brings me peace, your laughter brings me joy, and your 
                love gives me strength. Every day with you is a gift I cherish deeply.
              </p>
              
              <p>
                This Valentine's Day, I want you to know that my love for you grows 
                stronger with each passing moment. You are my today and all of my tomorrows.
              </p>
              
              <p className="text-right italic font-serif text-xl text-rose-700 dark:text-rose-300 pt-4">
                Forever yours,<br />
                <span className="text-2xl">♥</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-pink-50 to-rose-50 dark:from-pink-950 dark:to-rose-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Sparkles className="w-12 h-12 text-rose-500 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold text-rose-700 dark:text-rose-300 font-serif">
              Why I Love You
            </h2>
            <p className="text-xl text-rose-600 dark:text-rose-400 italic">
              Just a few of the countless reasons...
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <Card 
                key={index}
                className="border-rose-200 dark:border-rose-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-rose-900/30 backdrop-blur"
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <Heart className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" fill="currentColor" />
                  <p className="text-lg text-rose-900 dark:text-rose-100 leading-relaxed">
                    {reason}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-rose-50 to-pink-100 dark:from-rose-950 dark:to-pink-950">
        <div className="max-w-2xl mx-auto">
          <Card className="border-rose-300 dark:border-rose-700 shadow-2xl bg-white/90 dark:bg-rose-900/40 backdrop-blur">
            <CardHeader className="text-center space-y-6 pb-8">
              <div className="flex justify-center">
                <Heart className="w-16 h-16 text-rose-500 animate-pulse" fill="currentColor" />
              </div>
              <CardTitle className="text-3xl md:text-4xl text-rose-700 dark:text-rose-300 font-serif leading-tight">
                Will You Be My Valentine?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {response === null ? (
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={() => setResponse('yes')}
                    className="text-xl px-12 py-6 bg-rose-600 hover:bg-rose-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Yes! 💕
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setResponse('no')}
                    className="text-xl px-12 py-6 border-rose-400 text-rose-700 hover:bg-rose-100 dark:border-rose-600 dark:text-rose-300 dark:hover:bg-rose-900/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Let me think...
                  </Button>
                </div>
              ) : response === 'yes' ? (
                <div className="text-center space-y-6 animate-in fade-in duration-500">
                  <div className="text-6xl">🎉💖✨</div>
                  <p className="text-2xl md:text-3xl font-bold text-rose-700 dark:text-rose-300">
                    You've made me the happiest person alive!
                  </p>
                  <p className="text-xl text-rose-600 dark:text-rose-400 italic">
                    I love you more than words can say, Ahana
                  </p>
                  <Button
                    variant="ghost"
                    onClick={() => setResponse(null)}
                    className="text-rose-600 hover:text-rose-700 dark:text-rose-400 dark:hover:text-rose-300"
                  >
                    ← Go back
                  </Button>
                </div>
              ) : (
                <div className="text-center space-y-6 animate-in fade-in duration-500">
                  <div className="text-6xl">🥺💭</div>
                  <p className="text-2xl md:text-3xl font-bold text-rose-700 dark:text-rose-300">
                    Take all the time you need...
                  </p>
                  <p className="text-xl text-rose-600 dark:text-rose-400 italic">
                    But I'll be here waiting, because you're worth it
                  </p>
                  <Button
                    variant="ghost"
                    onClick={() => setResponse(null)}
                    className="text-rose-600 hover:text-rose-700 dark:text-rose-400 dark:hover:text-rose-300"
                  >
                    ← Go back
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 bg-rose-100 dark:bg-rose-950 border-t border-rose-200 dark:border-rose-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-700 dark:text-rose-300">
            © 2026. Built with <Heart className="inline w-4 h-4 text-rose-500" fill="currentColor" /> using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-rose-900 dark:hover:text-rose-100 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
