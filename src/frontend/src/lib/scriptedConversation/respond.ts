import { conversationRules, fallbackResponses } from './rules';
import type { ConversationResponse } from './types';

export function respond(userInput: string, language: string = 'en-IN'): ConversationResponse {
  const normalizedInput = userInput.toLowerCase().trim();

  // Sort rules by priority (higher first)
  const sortedRules = [...conversationRules].sort(
    (a, b) => (b.priority || 0) - (a.priority || 0)
  );

  // Find matching rule
  for (const rule of sortedRules) {
    for (const keyword of rule.keywords) {
      if (normalizedInput.includes(keyword.toLowerCase())) {
        // Return a random response from the matching rule
        const randomIndex = Math.floor(Math.random() * rule.responses.length);
        return rule.responses[randomIndex];
      }
    }
  }

  // No match found, return fallback
  const randomIndex = Math.floor(Math.random() * fallbackResponses.length);
  return fallbackResponses[randomIndex];
}
