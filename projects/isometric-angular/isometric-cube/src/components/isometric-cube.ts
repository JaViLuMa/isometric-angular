import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  input,
  computed,
} from "@angular/core";
import {
  ɵisometricSize as isometricSize,
  ɵisometricBorder as isometricBorder,
  ɵisometricPosition as isometricPosition,
  ɵisometricShadow as isometricShadow,
  ɵisometricShadowAnimation as isometricShadowAnimation,
  ɵisometricRotation as isometricRotation,
  ɵgetCorrectValue as getCorrectValue,
  type SizeAsObject,
  type Border,
  type Position,
  type Shadow,
  type ShadowAnimation,
  type Rotation,
  type ɵCSSVariables as CSSVariables,
} from "isometric-angular/core";

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
  styleUrl: "../styles/isometric-cube.styles.css",
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
