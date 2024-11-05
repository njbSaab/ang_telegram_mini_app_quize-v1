import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TelegramService } from './services/telegram.service';

declare const Telegram: any; // Объявляем Telegram как глобальную переменную

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  telegram = inject(TelegramService);

  constructor() {
    this.telegram.ready();

    // Проверка наличия `Telegram` и `WebApp`
    if (typeof Telegram !== 'undefined' && Telegram.WebApp) {
      Telegram.WebApp.expand();
    } else {
      console.warn('Telegram WebApp API недоступен');
    }
  }
}
