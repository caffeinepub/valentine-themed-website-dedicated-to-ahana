import { useState } from 'react';

export type AnimationState = 'idle' | 'talking' | 'happy' | 'sad' | 'excited';

interface AvatarAnimationStateHook {
  animationState: AnimationState;
  setAnimationState: (state: AnimationState) => void;
}

export function useAvatarAnimationState(): AvatarAnimationStateHook {
  const [animationState, setAnimationState] = useState<AnimationState>('idle');

  return {
    animationState,
    setAnimationState,
  };
}
