import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "om-aurora",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./ngx-aurora.component.html",
  styleUrl: "./ngx-aurora.component.scss",
})
export class NgxAuroraComponent implements AfterViewInit, OnDestroy {
  @ViewChild("OmAuroraWrapper") auroraRef!: ElementRef<HTMLElement>;

  @Input("styleClass")
  styleClass?: string;

  @Input("invert")
  set auroraInvert(invert: boolean) {
    if (invert) {
      this.style["--om-aurora-invert"] = "invert(1)";
      return;
    }

    this.style["--om-aurora-invert"] = "invert(0)";
  }

  @Input("versionTwo")
  versionTwo = false;

  style: any = {};

  isInView = false;
  private intersectionObserver?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.intersectionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!this.isInView) {
          this.isInView = true;
        }
      } else if (this.isInView) {
        this.isInView = false;
      }
    });
    this.intersectionObserver.observe(this.auroraRef.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }
}
