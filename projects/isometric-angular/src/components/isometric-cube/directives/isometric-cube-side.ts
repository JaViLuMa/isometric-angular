import { computed, Directive, input } from "@angular/core";
import { CubeSides } from "../types/cube-sides.types";
import { cubeSideClasses } from "../constants/cube-side-classes";

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
