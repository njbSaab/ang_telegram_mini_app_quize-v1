import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

interface TgButton {
  show(): void;
  hide(): void;
  setText(text: string): void;
}

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private window: Window | null;
  tg: any;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.window = this.document.defaultView;
    this.tg = this.window?.Telegram?.WebApp;
  }

  get MainBtn(): TgButton {
    return this.tg.MainButton;
  }
}