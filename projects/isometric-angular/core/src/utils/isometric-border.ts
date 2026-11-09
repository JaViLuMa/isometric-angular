import { computed, type Signal } from "@angular/core";
import { getCorrectValue } from "./get-correct-value";
import type { Border } from "../types/border.types";
import type { CSSVariables } from "../types/common.types";

const BORDER_SIZE_VARIABLE = `--isometric-border-size`;
const BORDER_STYLE_VARIABLE = `--isometric-border-style`;
const BORDER_COLOR_VARIABLE = `--isometric-border-color`;

export function isometricBorder(
  border: Signal<Border | undefined>,
  suffix: Signal<string> | string = "",
): Signal<CSSVariables | undefined> {
  return computed(() => {
    const borderValue = border();

    if (!borderValue) {
      return undefined;
    }

    const suffixValue = typeof suffix === "string" ? suffix : suffix();

    return {
      [`${BORDER_SIZE_VARIABLE}${suffixValue}`]: getCorrectValue(
        borderValue.size,
        "px",
      ),
      [`${BORDER_STYLE_VARIABLE}${suffixValue}`]: borderValue.style ?? "solid",
      [`${BORDER_COLOR_VARIABLE}${suffixValue}`]: borderValue.color ?? "#000",
    };
  });
}
