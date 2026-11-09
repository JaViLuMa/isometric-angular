import type { BorderProps } from "./border.types";
import type { EdgeProps } from "./edge.types";
import type { PositionProps } from "./position.types";
import type { RotationProps } from "./rotation.types";
import type { ShadowProps } from "./shadow.types";
import type { ShadowAnimationProps } from "./shadow-animation.types";

export type IsometricOptionalsWithoutBorderAndEdge = ShadowProps &
  PositionProps &
  ShadowAnimationProps &
  RotationProps;

export type IsometricOptionalsWithoutEdge =
  IsometricOptionalsWithoutBorderAndEdge & BorderProps;

export type IsometricOptionals = IsometricOptionalsWithoutEdge & EdgeProps;
