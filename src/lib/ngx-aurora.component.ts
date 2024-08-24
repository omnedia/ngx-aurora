import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'om-aurora',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./ngx-aurora.component.html",
  styleUrl: "./ngx-aurora.component.scss",
})
export class NgxAuroraComponent {
  @Input("styleClass")
  styleClass?: string;

  @Input("invert")
  set auroraInvert(invert: boolean) {
    if (invert) {
      this.style['--om-aurora-invert'] = 'invert(1)';
      return;
    }

    this.style['--om-aurora-invert'] = 'invert(0)';
  }

  @Input("versionTwo")
  versionTwo = false;

  style: any = {}
}
