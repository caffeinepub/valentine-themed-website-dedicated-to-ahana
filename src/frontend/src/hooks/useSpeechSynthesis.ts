import { useState, useEffect, useCallback, useRef } from 'react';

interface SpeechSynthesisHook {
  speak: (text: string) => void;
  isSpeaking: boolean;
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
  selectedLanguage: string;
  setSelectedLanguage: (lang: string) => void;
  availableLanguages: Array<{ code: string; name: string }>;
  selectedVoiceName: string;
}

const AVAILABLE_LANGUAGES = [
  { code: 'hi-IN', name: 'Hindi (India)' },
  { code: 'en-IN', name: 'English (India)' },
  { code: 'en-US', name: 'English (US)' },
  { code: 'es-ES', name: 'Spanish' },
  { code: 'fr-FR', name: 'French' },
];

export function useSpeechSynthesis(): SpeechSynthesisHook {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('hi-IN');
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceName, setSelectedVoiceName] = useState('');
  
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Load available voices
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  // Select the best voice for the current language
  const selectVoice = useCallback((lang: string): SpeechSynthesisVoice | null => {
    if (voices.length === 0) return null;

    // Try to find an Indian female voice for Hindi/English-India
    if (lang === 'hi-IN' || lang === 'en-IN') {
      const indianFemaleVoice = voices.find(
        (v) =>
          v.lang.startsWith('hi') &&
          (v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('woman'))
      );
      if (indianFemaleVoice) return indianFemaleVoice;

      const indianVoice = voices.find((v) => v.lang.startsWith('hi') || v.lang === 'en-IN');
      if (indianVoice) return indianVoice;
    }

    // Find voice matching the language
    const matchingVoice = voices.find((v) => v.lang === lang || v.lang.startsWith(lang.split('-')[0]));
    if (matchingVoice) return matchingVoice;

    // Fallback to default voice
    return voices[0] || null;
  }, [voices]);

  // Update selected voice name when language or voices change
  useEffect(() => {
    const voice = selectVoice(selectedLanguage);
    setSelectedVoiceName(voice ? voice.name : 'Default voice');
  }, [selectedLanguage, voices, selectVoice]);

  const speak = useCallback(
    (text: string) => {
      if (isMuted || !text) return;

      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = selectedLanguage;
      
      const voice = selectVoice(selectedLanguage);
      if (voice) {
        utterance.voice = voice;
      }

      // Adjust pitch and rate for a more natural female voice
      utterance.pitch = 1.2;
      utterance.rate = 0.9;

      utterance.onstart = () => {
        setIsSpeaking(true);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
      };

      utterance.onerror = () => {
        setIsSpeaking(false);
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    },
    [isMuted, selectedLanguage, selectVoice]
  );

  return {
    speak,
    isSpeaking,
    isMuted,
    setIsMuted,
    selectedLanguage,
    setSelectedLanguage,
    availableLanguages: AVAILABLE_LANGUAGES,
    selectedVoiceName,
  };
}
