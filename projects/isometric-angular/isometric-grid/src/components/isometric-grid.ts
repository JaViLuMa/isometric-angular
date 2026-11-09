import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from "@angular/core";
import {
  ɵisometricPosition as isometricPosition,
  ɵisometricShadow as isometricShadow,
  ɵisometricShadowAnimation as isometricShadowAnimation,
  ɵisometricRotation as isometricRotation,
  ɵgetCorrectValue as getCorrectValue,
  type SizeMultiplier,
  type Position,
  type Shadow,
  type ShadowAnimation,
  type Rotation,
  type ɵCSSVariables as CSSVariables,
} from "isometric-angular/core";

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
  styleUrl: "../styles/isometric-grid.styles.css",
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
