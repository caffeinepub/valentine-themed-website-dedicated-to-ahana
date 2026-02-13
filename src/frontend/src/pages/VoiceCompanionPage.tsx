import { useState, useEffect } from 'react';
import { AvatarViewport } from '@/components/avatar/AvatarViewport';
import { TranscriptPanel } from '@/components/companion/TranscriptPanel';
import { VoiceControls } from '@/components/companion/VoiceControls';
import { ChatComposer } from '@/components/companion/ChatComposer';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';
import { useSpeechSynthesis } from '@/hooks/useSpeechSynthesis';
import { useAvatarAnimationState } from '@/hooks/useAvatarAnimationState';
import { respond } from '@/lib/scriptedConversation/respond';
import type { Message } from '@/lib/scriptedConversation/types';

export default function VoiceCompanionPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello sir! I\'m Isabella, your AI companion. How are you today?',
      emotion: 'happy',
      timestamp: Date.now(),
    },
  ]);

  const { animationState, setAnimationState } = useAvatarAnimationState();
  const {
    isListening,
    interimText,
    finalText,
    isSupported: speechRecognitionSupported,
    error: speechRecognitionError,
    startListening,
    stopListening,
  } = useSpeechRecognition();

  const {
    speak,
    isSpeaking,
    isMuted,
    setIsMuted,
    selectedLanguage,
    setSelectedLanguage,
    availableLanguages,
    selectedVoiceName,
  } = useSpeechSynthesis();

  // Handle final recognized text
  useEffect(() => {
    if (finalText) {
      handleUserMessage(finalText);
    }
  }, [finalText]);

  // Update avatar animation based on speaking state
  useEffect(() => {
    if (isSpeaking) {
      setAnimationState('talking');
    } else if (animationState === 'talking') {
      setAnimationState('idle');
    }
  }, [isSpeaking]);

  const handleUserMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      role: 'user',
      content: text,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Get assistant response
    const response = respond(text, selectedLanguage);
    const assistantMessage: Message = {
      role: 'assistant',
      content: response.text,
      emotion: response.emotion,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, assistantMessage]);

    // Trigger emotion animation
    if (response.emotion && response.emotion !== 'neutral') {
      setAnimationState(response.emotion);
      setTimeout(() => {
        if (!isSpeaking) {
          setAnimationState('idle');
        }
      }, 3000);
    }

    // Speak the response
    if (!isMuted) {
      speak(response.text);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Isabella
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Your AI companion
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl">
        {/* Avatar Section */}
        <div className="flex flex-col gap-4">
          <AvatarViewport animationState={animationState} />
          <VoiceControls
            isListening={isListening}
            interimText={interimText}
            isMuted={isMuted}
            setIsMuted={setIsMuted}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
            availableLanguages={availableLanguages}
            selectedVoiceName={selectedVoiceName}
            speechRecognitionSupported={speechRecognitionSupported}
            speechRecognitionError={speechRecognitionError}
            startListening={startListening}
            stopListening={stopListening}
          />
        </div>

        {/* Chat Section */}
        <div className="flex flex-col gap-4 h-[calc(100vh-12rem)] lg:h-auto">
          <TranscriptPanel messages={messages} />
          <ChatComposer onSendMessage={handleUserMessage} disabled={isListening} />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/80 backdrop-blur-sm py-4">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2026. Built with <span className="text-primary">♥</span> using{' '}
          <a
            href="https://caffeine.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            caffeine.ai
          </a>
        </div>
      </footer>
    </div>
  );
}
