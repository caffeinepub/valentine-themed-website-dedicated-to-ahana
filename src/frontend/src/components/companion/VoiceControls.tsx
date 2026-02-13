import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Mic, MicOff, Volume2, VolumeX, AlertCircle } from 'lucide-react';

interface VoiceControlsProps {
  isListening: boolean;
  interimText: string;
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
  selectedLanguage: string;
  setSelectedLanguage: (lang: string) => void;
  availableLanguages: Array<{ code: string; name: string }>;
  selectedVoiceName: string;
  speechRecognitionSupported: boolean;
  speechRecognitionError: string | null;
  startListening: () => void;
  stopListening: () => void;
}

export function VoiceControls({
  isListening,
  interimText,
  isMuted,
  setIsMuted,
  selectedLanguage,
  setSelectedLanguage,
  availableLanguages,
  selectedVoiceName,
  speechRecognitionSupported,
  speechRecognitionError,
  startListening,
  stopListening,
}: VoiceControlsProps) {
  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        {/* Speech Recognition Status */}
        {!speechRecognitionSupported && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Voice input is not supported in your browser. Please use the text input below or try a modern browser like Chrome or Edge.
            </AlertDescription>
          </Alert>
        )}

        {speechRecognitionError && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{speechRecognitionError}</AlertDescription>
          </Alert>
        )}

        {/* Microphone Control */}
        <div className="flex items-center gap-4">
          <Button
            size="lg"
            onClick={isListening ? stopListening : startListening}
            disabled={!speechRecognitionSupported}
            className={`flex-1 ${
              isListening
                ? 'bg-destructive hover:bg-destructive/90'
                : 'bg-primary hover:bg-primary/90'
            }`}
          >
            {isListening ? (
              <>
                <MicOff className="mr-2 h-5 w-5" />
                Stop Listening
              </>
            ) : (
              <>
                <Mic className="mr-2 h-5 w-5" />
                Start Listening
              </>
            )}
          </Button>
        </div>

        {/* Interim Text Display */}
        {interimText && (
          <div className="p-3 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground italic">
              Listening: {interimText}
            </p>
          </div>
        )}

        {/* Language Selection */}
        <div className="space-y-2">
          <Label htmlFor="language-select">Language</Label>
          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger id="language-select">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              {availableLanguages.map((lang) => (
                <SelectItem key={lang.code} value={lang.code}>
                  {lang.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {selectedVoiceName && (
            <p className="text-xs text-muted-foreground">
              Voice: {selectedVoiceName}
            </p>
          )}
        </div>

        {/* Mute Control */}
        <div className="flex items-center justify-between">
          <Label htmlFor="mute-toggle" className="flex items-center gap-2">
            {isMuted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
            Assistant Voice
          </Label>
          <Switch
            id="mute-toggle"
            checked={!isMuted}
            onCheckedChange={(checked) => setIsMuted(!checked)}
          />
        </div>
      </CardContent>
    </Card>
  );
}
