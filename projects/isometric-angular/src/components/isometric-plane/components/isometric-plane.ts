import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from "@angular/core";
import { isometricSize } from "../../../utils/isometric-size";
import { isometricPosition } from "../../../utils/isometric-position";
import { isometricBorder } from "../../../utils/isometric-border";
import { isometricEdge } from "../../../utils/isometric-edge";
import { isometricShadow } from "../../../utils/isometric-shadow";
import { isometricShadowAnimation } from "../../../utils/isometric-shadow-animation";
import { isometricRotation } from "../../../utils/isometric-rotation";
import type { SizeAsObject } from "../../../types/size.types";
import type { Position } from "../../../types/position.types";
import type { Border } from "../../../types/border.types";
import type { Edge } from "../../../types/edge.types";
import type { Shadow } from "../../../types/shadow.types";
import type { ShadowAnimation } from "../../../types/shadow-animation.types";
import type { Rotation } from "../../../types/rotation.types";
import type { CSSVariables } from "../../../types/common.types";

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
  styleUrls: [
    "../../../styles/isometric.css",
    "../styles/isometric-plane.styles.css",
  ],
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
