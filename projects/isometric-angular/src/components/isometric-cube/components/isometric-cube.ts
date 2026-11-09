import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  input,
  computed,
} from "@angular/core";
import { isometricSize } from "../../../utils/isometric-size";
import { isometricBorder } from "../../../utils/isometric-border";
import { isometricPosition } from "../../../utils/isometric-position";
import { isometricShadow } from "../../../utils/isometric-shadow";
import { isometricShadowAnimation } from "../../../utils/isometric-shadow-animation";
import { isometricRotation } from "../../../utils/isometric-rotation";
import { getCorrectValue } from "../../../utils/get-correct-value";
import type { SizeAsObject } from "../../../types/size.types";
import type { Border } from "../../../types/border.types";
import type { Position } from "../../../types/position.types";
import type { Shadow } from "../../../types/shadow.types";
import type { ShadowAnimation } from "../../../types/shadow-animation.types";
import type { Rotation } from "../../../types/rotation.types";
import type { CSSVariables } from "../../../types/common.types";

@Component({
  selector: "[isometric-cube]",
  host: {
    class: "isometric-cube",
    "[class.isometric-position]": "!!positionVariables()",
    "[class.isometric-shadow]":
      "!!shadowVariables() || !!shadowAnimationVariables()",
    "[class.isometric-shadow-animation]": "!!shadowAnimationVariables()",
    "[class.isometric-rotation]": "!!rotationVariables()",
    "[style]": "styles()",
  },
  template: ` <ng-content /> `,
  styleUrls: [
    "../../../styles/isometric.css",
    "../styles/isometric-cube.styles.css",
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IsometricCube {
  readonly size = input.required<SizeAsObject>();
  readonly depth = input.required<number | string>();
  readonly border = input<Border>();
  readonly position = input<Position>();
  readonly shadow = input<Shadow>();
  readonly shadowAnimation = input<ShadowAnimation>();
  readonly rotation = input<Rotation>();

  protected readonly sizeVariables = isometricSize(this.size, "cube");
  protected readonly borderVariables = isometricBorder(this.border, "-cube");
  protected readonly positionVariables = isometricPosition(this.position);
  protected readonly shadowVariables = isometricShadow(this.shadow);
  protected readonly shadowAnimationVariables = isometricShadowAnimation(
    this.shadowAnimation,
  );
  protected readonly rotationVariables = isometricRotation(this.rotation);

  protected readonly styles = computed<CSSVariables>(() => ({
    ...this.sizeVariables(),
    ...this.borderVariables(),
    ...this.positionVariables(),
    ...this.shadowVariables(),
    ...this.shadowAnimationVariables(),
    ...this.rotationVariables(),
    "--isometric-cube-depth": getCorrectValue(this.depth()),
  }));
}
