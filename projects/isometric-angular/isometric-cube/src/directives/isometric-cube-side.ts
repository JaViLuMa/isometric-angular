import { computed, Directive, input } from "@angular/core";
import { cubeSideClasses } from "../constants/cube-side-classes";
import type { CubeSides } from "../types/cube-sides.types";

@Directive({
  selector: "[isometricCubeSide]",
  host: {
    "[class]": "sideClass()",
  },
})
export class IsometricCubeSide {
  readonly side = input.required<CubeSides>({
    alias: "isometricCubeSide",
  });

  protected readonly sideClass = computed(() => cubeSideClasses[this.side()]);
}
