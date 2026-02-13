export type Emotion = 'neutral' | 'happy' | 'sad' | 'excited';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  emotion?: Emotion;
  timestamp: number;
}

export interface ConversationResponse {
  text: string;
  emotion: Emotion;
}
