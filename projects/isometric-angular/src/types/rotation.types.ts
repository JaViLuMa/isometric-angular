export interface Rotation {
  from: string | number;
  to: string | number;
  delay?: number;
  duration?: number;
}

export interface RotationProps {
  rotation?: Rotation;
}
