import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portafolio';

  onScrollTo(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  onDonwload() {
    let link = document.createElement('a');
    link.download = 'SebastianIsazaCV.pdf';
    link.href = 'assets/files/SEBASTIAN_ISAZA_CV.pdf';
    link.click();
  }
}
