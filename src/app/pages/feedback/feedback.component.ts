import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { HeaderBgOnlyComponent } from '../../shared/header-bg-only/header-bg-only.component';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [HeaderBgOnlyComponent],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit, OnDestroy {
  feedback = signal(''); // корректное объявление сигнала

  constructor(private telegram: TelegramService) {}

  ngOnInit(): void {
    this.telegram.MainBtn.setText('Send message');
    // this.telegram.MainBtn.show();
    this.telegram.MainBtn.hide();

    // Устанавливаем обработчик с использованием глобального onEvent
    this.telegram.tg.onEvent('mainButtonClicked', this.sendData.bind(this));
  }
  setFeedback(event: Event) {
    const input = event.target as HTMLTextAreaElement;
    this.feedback.set(input.value);
    if (this.feedback().trim()) {
      this.telegram.MainBtn.show();
    } else {
      this.telegram.MainBtn.hide();
    }
  }

  sendData() {
    console.log('Sending data:', this.feedback());
    this.telegram.sendData({ feedback: this.feedback() });
  }

  ngOnDestroy(): void {
    // Убираем обработчик события через offEvent
    this.telegram.tg.offEvent('mainButtonClicked', this.sendData.bind(this));
  }
}
