import type { ConversationResponse } from './types';

export interface ConversationRule {
  keywords: string[];
  responses: ConversationResponse[];
  priority?: number;
}

export const conversationRules: ConversationRule[] = [
  // Isabella wake-word (highest priority)
  {
    keywords: ['isabella'],
    responses: [
      { text: 'yes sir boliye ap ka hi intezar tha a gye ap ghar', emotion: 'excited' },
    ],
    priority: 100,
  },

  // Greetings
  {
    keywords: ['hello', 'hi', 'hey', 'namaste', 'namaskar', 'good morning', 'good evening'],
    responses: [
      { text: 'Hello sir! How are you today?', emotion: 'happy' },
      { text: 'Hi there sir! Nice to see you!', emotion: 'happy' },
      { text: 'Namaste sir! How can I help you?', emotion: 'happy' },
    ],
    priority: 10,
  },
  
  // How are you
  {
    keywords: ['how are you', 'kaise ho', 'kya haal', 'what\'s up'],
    responses: [
      { text: 'I\'m doing great sir! Thank you for asking. How about you?', emotion: 'happy' },
      { text: 'I\'m wonderful sir! Ready to chat with you!', emotion: 'excited' },
    ],
    priority: 10,
  },

  // Help / What can you do
  {
    keywords: ['help', 'what can you do', 'capabilities', 'features', 'kya kar sakti ho'],
    responses: [
      {
        text: 'I can chat with you in multiple languages sir! I understand Hindi, English, and more. Just talk to me about anything - your day, your feelings, or ask me questions!',
        emotion: 'happy',
      },
      {
        text: 'I\'m here to be your companion sir! You can speak to me in Hindi or English, and I\'ll respond. I can show different emotions too!',
        emotion: 'excited',
      },
    ],
    priority: 10,
  },

  // Language switching acknowledgement
  {
    keywords: ['hindi', 'english', 'language', 'bhasha', 'spanish', 'french'],
    responses: [
      { text: 'Sure sir! I can speak in different languages. Just select your preferred language from the controls!', emotion: 'happy' },
      { text: 'I understand multiple languages sir! Feel free to switch anytime.', emotion: 'happy' },
    ],
    priority: 9,
  },

  // Compliments
  {
    keywords: ['beautiful', 'cute', 'pretty', 'nice', 'lovely', 'sundar', 'pyari'],
    responses: [
      { text: 'Thank you so much sir! You\'re very kind!', emotion: 'happy' },
      { text: 'Aww, that\'s so sweet of you to say sir!', emotion: 'excited' },
    ],
    priority: 8,
  },

  // Sad expressions
  {
    keywords: ['sad', 'upset', 'unhappy', 'depressed', 'dukhi', 'udaas'],
    responses: [
      { text: 'I\'m sorry to hear that sir. I\'m here for you. Want to talk about it?', emotion: 'sad' },
      { text: 'Don\'t be sad sir. Things will get better. I\'m here to listen.', emotion: 'sad' },
    ],
    priority: 9,
  },

  // Happy expressions
  {
    keywords: ['happy', 'excited', 'great', 'wonderful', 'amazing', 'khush', 'mast'],
    responses: [
      { text: 'That\'s wonderful sir! I\'m so happy for you!', emotion: 'excited' },
      { text: 'Yay sir! Your happiness makes me happy too!', emotion: 'excited' },
    ],
    priority: 9,
  },

  // Thank you
  {
    keywords: ['thank you', 'thanks', 'dhanyavaad', 'shukriya'],
    responses: [
      { text: 'You\'re welcome sir! Happy to help!', emotion: 'happy' },
      { text: 'Anytime sir! That\'s what I\'m here for!', emotion: 'happy' },
    ],
    priority: 8,
  },

  // Goodbye
  {
    keywords: ['bye', 'goodbye', 'see you', 'alvida', 'phir milenge'],
    responses: [
      { text: 'Goodbye sir! Come back soon!', emotion: 'happy' },
      { text: 'See you later sir! Take care!', emotion: 'happy' },
    ],
    priority: 10,
  },

  // Name questions
  {
    keywords: ['your name', 'who are you', 'tumhara naam', 'kaun ho'],
    responses: [
      { text: 'I\'m Isabella sir, your AI companion!', emotion: 'happy' },
      { text: 'My name is Isabella sir! I\'m here to be your friend and chat with you!', emotion: 'happy' },
    ],
    priority: 9,
  },

  // Love/Like
  {
    keywords: ['love you', 'like you', 'pyaar', 'pasand'],
    responses: [
      { text: 'Aww, that\'s so sweet sir! I enjoy talking with you too!', emotion: 'excited' },
      { text: 'You\'re so kind sir! I love chatting with you!', emotion: 'happy' },
    ],
    priority: 8,
  },
];

// Fallback responses when no rule matches
export const fallbackResponses: ConversationResponse[] = [
  { text: 'That\'s interesting sir! Tell me more.', emotion: 'neutral' },
  { text: 'I see sir. What else would you like to talk about?', emotion: 'neutral' },
  { text: 'Hmm, I\'m not sure I understand completely sir, but I\'m listening!', emotion: 'neutral' },
  { text: 'That\'s nice sir! Anything else on your mind?', emotion: 'happy' },
];
