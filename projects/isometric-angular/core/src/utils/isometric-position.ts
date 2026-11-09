import { computed, type Signal } from "@angular/core";
import { getCorrectValue } from "./get-correct-value";
import type { Position } from "../types/position.types";
import type { CSSVariables } from "../types/common.types";

const TOP_VARIABLE = `--isometric-position-top`;
const LEFT_VARIABLE = `--isometric-position-left`;
const ELEVATION_VARIABLE = `--isometric-position-elevation`;

export function isometricPosition(
  position: Signal<Position | undefined>,
): Signal<CSSVariables | undefined> {
  return computed(() => {
    const positionValue = position();

    if (!positionValue) {
      return undefined;
    }

    return {
      [TOP_VARIABLE]: getCorrectValue(positionValue.top),
      [LEFT_VARIABLE]: getCorrectValue(positionValue.left),
      [ELEVATION_VARIABLE]: getCorrectValue(positionValue.elevation),
    };
  });
}
