import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from "@angular/core";
import { isometricPosition } from "../../../utils/isometric-position";
import { isometricShadow } from "../../../utils/isometric-shadow";
import { isometricShadowAnimation } from "../../../utils/isometric-shadow-animation";
import { isometricRotation } from "../../../utils/isometric-rotation";
import { getCorrectValue } from "../../../utils/get-correct-value";
import type { SizeMultiplier } from "../../../types/size.types";
import type { Position } from "../../../types/position.types";
import type { Shadow } from "../../../types/shadow.types";
import type { ShadowAnimation } from "../../../types/shadow-animation.types";
import type { Rotation } from "../../../types/rotation.types";
import type { CSSVariables } from "../../../types/common.types";

@Component({
  selector: "[isometric-grid]",
  host: {
    class: "isometric-grid",
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
    "../styles/isometric-grid.styles.css",
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IsometricGrid {
  readonly size = input.required<string | number>();
  readonly sizeMultiplier = input<SizeMultiplier>();
  readonly color = input("#000");
  readonly lineweight = input<string | number>();
  readonly position = input<Position>();
  readonly shadow = input<Shadow>();
  readonly shadowAnimation = input<ShadowAnimation>();
  readonly rotation = input<Rotation>();

  protected readonly positionVariables = isometricPosition(this.position);
  protected readonly shadowVariables = isometricShadow(this.shadow);
  protected readonly shadowAnimationVariables = isometricShadowAnimation(
    this.shadowAnimation,
  );
  protected readonly rotationVariables = isometricRotation(this.rotation);

  protected readonly styles = computed<CSSVariables>(() => {
    const { width = 1, height = 1 } = this.sizeMultiplier() ?? {};

    return {
      ...this.positionVariables(),
      ...this.shadowVariables(),
      ...this.shadowAnimationVariables(),
      ...this.rotationVariables(),
      "--isometric-grid-size": getCorrectValue(this.size()),
      "--isometric-grid-lineweight": getCorrectValue(this.lineweight(), "%"),
      "--isometric-grid-color": this.color(),
      "--isometric-grid-width": String(width),
      "--isometric-grid-height": String(height),
    };
  });
}
