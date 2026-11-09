import { computed, type Signal } from "@angular/core";
import { getCorrectValue } from "./get-correct-value";
import type { Edge } from "../types/edge.types";
import type { CSSVariables } from "../types/common.types";

const EDGE_DEPTH_VARIABLE = `--isometric-edge-depth`;
const EDGE_COLOR_VARIABLE = `--isometric-edge-color`;

export function isometricEdge(
  edge: Signal<Edge | undefined>,
): Signal<CSSVariables | undefined> {
  return computed(() => {
    const edgeValue = edge();

    if (!edgeValue) {
      return undefined;
    }

    return {
      [EDGE_DEPTH_VARIABLE]: getCorrectValue(edgeValue.depth, "px"),
      [EDGE_COLOR_VARIABLE]: edgeValue.color ?? "#fff",
    };
  });
}
