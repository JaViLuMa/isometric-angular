import {
  ChangeDetectionStrategy,
  Component,
  input,
  ViewEncapsulation,
} from "@angular/core";
import type { ClassValue } from "../../../types/common.types";

@Component({
  selector: "[isometric-root]",
  host: {
    class: "isometric-container",
  },
  template: `
    <div class="isometric" [class]="isometricClass()">
      <ng-content />
    </div>
  `,
  styleUrl: "../styles/isometric.styles.css",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Isometric {
  readonly isometricClass = input<ClassValue>();
}
