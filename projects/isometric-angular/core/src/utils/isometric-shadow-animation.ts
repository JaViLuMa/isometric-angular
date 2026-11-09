import { computed, type Signal } from "@angular/core";
import { getCorrectValue } from "./get-correct-value";
import { isometricShadow } from "./isometric-shadow";
import type { Shadow } from "../types/shadow.types";
import type { ShadowAnimation } from "../types/shadow-animation.types";
import type { CSSVariables } from "../types/common.types";

const SHADOW_ANIMATION_FROM_VARIABLE = `--isometric-shadow-animation-from`;
const SHADOW_ANIMATION_FROM_WITH_UNIT_VARIABLE = `--isometric-shadow-animation-from-with-unit`;
const SHADOW_ANIMATION_TO_VARIABLE = `--isometric-shadow-animation-to`;
const SHADOW_ANIMATION_TO_WITH_UNIT_VARIABLE = `--isometric-shadow-animation-to-with-unit`;
const SHADOW_ANIMATION_DELAY_VARIABLE = `--isometric-shadow-animation-delay`;
const SHADOW_ANIMATION_DURATION_VARIABLE = `--isometric-shadow-animation-duration`;
const SHADOW_ANIMATION_OPTIONS_VARIABLE = `--isometric-shadow-animation-options`;

export function isometricShadowAnimation(
  shadowAnimation: Signal<ShadowAnimation | undefined>,
): Signal<CSSVariables | undefined> {
  const shadowPropertiesToUse: Signal<Shadow | undefined> = computed(() => {
    const shadowAnimationValue = shadowAnimation();

    return shadowAnimationValue
      ? {
          distance: shadowAnimationValue.from,
          spacingX: shadowAnimationValue.spacingX,
          spacingY: shadowAnimationValue.spacingY,
        }
      : undefined;
  });

  const shadowStyles = isometricShadow(shadowPropertiesToUse);

  return computed(() => {
    const shadowAnimationValue = shadowAnimation();
    const shadowStylesValue = shadowStyles();

    if (!shadowStylesValue) {
      return undefined;
    }

    return {
      ...shadowStylesValue,
      [SHADOW_ANIMATION_FROM_VARIABLE]: parseFloat(
        shadowAnimationValue?.from?.toString() ?? "0",
      ).toString(),
      [SHADOW_ANIMATION_FROM_WITH_UNIT_VARIABLE]: getCorrectValue(
        shadowAnimationValue?.from,
      ),
      [SHADOW_ANIMATION_TO_VARIABLE]: parseFloat(
        shadowAnimationValue?.to?.toString() ?? "0",
      ).toString(),
      [SHADOW_ANIMATION_TO_WITH_UNIT_VARIABLE]: getCorrectValue(
        shadowAnimationValue?.to,
      ),
      [SHADOW_ANIMATION_DELAY_VARIABLE]: getCorrectValue(
        shadowAnimationValue?.delay,
        "s",
      ),
      [SHADOW_ANIMATION_DURATION_VARIABLE]: getCorrectValue(
        shadowAnimationValue?.duration,
        "s",
      ),
      [SHADOW_ANIMATION_OPTIONS_VARIABLE]:
        shadowAnimationValue?.options ?? "normal",
    };
  });
}
