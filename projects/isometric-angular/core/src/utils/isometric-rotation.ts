import { computed, type Signal } from "@angular/core";
import { getCorrectValue } from "./get-correct-value";
import type { Rotation } from "../types/rotation.types";
import type { CSSVariables } from "../types/common.types";

const ROTATION_FROM_VARIABLE = `--isometric-rotation-from`;
const ROTATION_TO_VARIABLE = `--isometric-rotation-to`;
const ROTATION_DELAY_VARIABLE = `--isometric-rotation-delay`;
const ROTATION_DURATION_VARIABLE = `--isometric-rotation-duration`;

export function isometricRotation(
  rotation: Signal<Rotation | undefined>,
): Signal<CSSVariables | undefined> {
  return computed(() => {
    const rotationValue = rotation();

    if (!rotationValue) {
      return undefined;
    }

    return {
      [ROTATION_FROM_VARIABLE]: getCorrectValue(rotationValue.from, "deg"),
      [ROTATION_TO_VARIABLE]: getCorrectValue(rotationValue.to, "deg"),
      [ROTATION_DELAY_VARIABLE]: getCorrectValue(rotationValue.delay, "s"),
      [ROTATION_DURATION_VARIABLE]: getCorrectValue(
        rotationValue.duration,
        "s",
      ),
    };
  });
}
