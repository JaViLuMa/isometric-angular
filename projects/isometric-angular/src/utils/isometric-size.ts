import { computed, type Signal } from "@angular/core";
import { getCorrectValue } from "./get-correct-value";
import type { IsometricElements } from "../types/isometric-elements";
import type { SizeProps } from "../types/size.types";
import type { CSSVariables } from "../types/common.types";

export function isometricSize(
  size: Signal<SizeProps>,
  element: Signal<IsometricElements>,
): Signal<CSSVariables> {
  return computed(() => {
    const elementValue = element();

    const widthVariable = `--isometric-${elementValue}-width`;
    const heightVariable = `--isometric-${elementValue}-height`;

    const sizeValue = size();

    if (typeof sizeValue === "number" || typeof sizeValue === "string") {
      return {
        [widthVariable]: getCorrectValue(sizeValue),
        [heightVariable]: getCorrectValue(sizeValue),
      };
    }

    const { width, height } = sizeValue;

    return {
      [widthVariable]: getCorrectValue(width),
      [heightVariable]: getCorrectValue(height),
    };
  });
}
