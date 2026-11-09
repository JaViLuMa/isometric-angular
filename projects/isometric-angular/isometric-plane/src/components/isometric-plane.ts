import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from "@angular/core";
import {
  ɵisometricSize as isometricSize,
  ɵisometricEdge as isometricEdge,
  ɵisometricBorder as isometricBorder,
  ɵisometricPosition as isometricPosition,
  ɵisometricShadow as isometricShadow,
  ɵisometricShadowAnimation as isometricShadowAnimation,
  ɵisometricRotation as isometricRotation,
  type SizeAsObject,
  type Border,
  type Edge,
  type Position,
  type Shadow,
  type ShadowAnimation,
  type Rotation,
  type ɵCSSVariables as CSSVariables,
} from "isometric-angular/core";

@Component({
  selector: "[isometric-plane]",
  host: {
    class: "isometric-plane",
    "[class.isometric-position]": "!!positionVariables()",
    "[class.isometric-border]": "!!borderVariables()",
    "[class.isometric-edge]": "!!edgeVariables()",
    "[class.isometric-shadow]":
      "!!shadowVariables() || !!shadowAnimationVariables()",
    "[class.isometric-shadow-animation]": "!!shadowAnimationVariables()",
    "[class.isometric-rotation]": "!!rotationVariables()",
    "[style]": "styles()",
  },
  template: ` <ng-content /> `,
  styleUrl: "../styles/isometric-plane.styles.css",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IsometricPlane {
  readonly size = input.required<SizeAsObject>();
  readonly color = input("#000");
  readonly position = input<Position>();
  readonly border = input<Border>();
  readonly edge = input<Edge>();
  readonly shadow = input<Shadow>();
  readonly shadowAnimation = input<ShadowAnimation>();
  readonly rotation = input<Rotation>();

  protected readonly sizeVariables = isometricSize(this.size, "plane");
  protected readonly positionVariables = isometricPosition(this.position);
  protected readonly borderVariables = isometricBorder(this.border);
  protected readonly edgeVariables = isometricEdge(this.edge);
  protected readonly shadowVariables = isometricShadow(this.shadow);
  protected readonly shadowAnimationVariables = isometricShadowAnimation(
    this.shadowAnimation,
  );
  protected readonly rotationVariables = isometricRotation(this.rotation);

  protected readonly styles = computed<CSSVariables>(() => ({
    ...this.sizeVariables(),
    ...this.positionVariables(),
    ...this.borderVariables(),
    ...this.edgeVariables(),
    ...this.shadowVariables(),
    ...this.shadowAnimationVariables(),
    ...this.rotationVariables(),
    "--isometric-plane-color": this.color(),
  }));
}
