import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', './about.component.adaptive.css']
})
export class AboutComponent {

  scrollHeight: number = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

  @HostListener('document:scroll', ['$event'])
  getScale() {
    let x;
    if (window.scrollY < this.scrollHeight) {
      x = 1 + 0.0001 * window.scrollY;
      return `scale(${x})`;
    }
    return `scale(${x})`;
  }
}