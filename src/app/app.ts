import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from "./highlight";

@Component({
  selector: 'app-root',
  templateUrl: "./app.html",
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Terminal-V');
  price: number = 549.99;
  language: 'en' | 'pt' | 'es' = 'en';
  private readonly usdToBrl = 5.2;
  private readonly brlToUsd = 1 / 5.2;
  private readonly usdToEur = 0.93;
  private readonly eurToUsd = 1 / 0.93;
  private readonly brlToEur = 0.93 / 5.2;
  private readonly eurToBrl = 5.2 / 0.93;

  setLanguage(event: Event) {
    const select = event.target as HTMLSelectElement;
    const newLang = select.value as 'en' | 'pt' | 'es';
    if (newLang !== this.language) {
      if (this.language === 'pt') {
        this.price = +(this.price * this.brlToUsd).toFixed(2);
      } else if (this.language === 'es') {
        this.price = +(this.price * this.eurToUsd).toFixed(2);
      }
      if (newLang === 'pt') {
        this.price = +(this.price * this.usdToBrl).toFixed(2);
      } else if (newLang === 'es') {
        this.price = +(this.price * this.usdToEur).toFixed(2);
      }
      this.language = newLang;
    }
  }
}
