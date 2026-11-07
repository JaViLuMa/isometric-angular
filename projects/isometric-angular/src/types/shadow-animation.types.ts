export interface ShadowAnimation {
  from: string | number;
  to: string | number;
  spacingX: number;
  spacingY: number;
  delay?: number;
  duration?: number;
  options?: string;
}

export interface ShadowAnimationProps {
  shadowAnimation?: ShadowAnimation;
}
