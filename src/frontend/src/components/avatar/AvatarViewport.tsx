import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { AnimeGirlScene } from './AnimeGirlScene';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import type { AnimationState } from '@/hooks/useAvatarAnimationState';

interface AvatarViewportProps {
  animationState: AnimationState;
}

export function AvatarViewport({ animationState }: AvatarViewportProps) {
  // Check for WebGL support
  const checkWebGLSupport = () => {
    try {
      const canvas = document.createElement('canvas');
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
    } catch (e) {
      return false;
    }
  };

  const isWebGLSupported = checkWebGLSupport();

  if (!isWebGLSupported) {
    return (
      <Card className="w-full aspect-square lg:aspect-video flex items-center justify-center p-6">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            WebGL is not supported in your browser. The 3D avatar cannot be displayed.
            Please try using a modern browser like Chrome, Firefox, or Edge.
          </AlertDescription>
        </Alert>
      </Card>
    );
  }

  return (
    <Card className="w-full aspect-square lg:aspect-video overflow-hidden bg-gradient-to-br from-accent/20 to-primary/10">
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-sm text-muted-foreground">Loading avatar...</p>
            </div>
          </div>
        }
      >
        <Canvas
          camera={{ position: [0, 1, 5], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          <AnimeGirlScene animationState={animationState} />
        </Canvas>
      </Suspense>
    </Card>
  );
}
