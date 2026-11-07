import { computed, type Signal } from "@angular/core";
import { getCorrectValue } from "./get-correct-value";
import type { Shadow } from "../types/shadow.types";
import type { CSSVariables } from "../types/common.types";

const SHADOW_DISTANCE_VARIABLE = `--isometric-shadow-distance`;
const SHADOW_DISTANCE_WITH_UNIT_VARIABLE = `--isometric-shadow-distance-with-unit`;
const SHADOW_SPACING_X_VARIABLE = `--isometric-shadow-spacing-x`;
const SHADOW_SPACING_Y_VARIABLE = `--isometric-shadow-spacing-y`;

export function isometricShadow(
  shadow: Signal<Shadow | undefined>,
): Signal<CSSVariables | undefined> {
  return computed(() => {
    const shadowValue = shadow();

    if (!shadowValue) {
      return undefined;
    }

    return {
      [SHADOW_DISTANCE_VARIABLE]: parseFloat(
        shadowValue.distance?.toString() ?? "0",
      ).toString(),
      [SHADOW_DISTANCE_WITH_UNIT_VARIABLE]: getCorrectValue(
        shadowValue.distance,
      ),
      [SHADOW_SPACING_X_VARIABLE]: shadowValue.spacingX.toString(),
      [SHADOW_SPACING_Y_VARIABLE]: shadowValue.spacingY.toString(),
    };
  });
}
