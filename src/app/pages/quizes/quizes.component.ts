import { Component, inject } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';

@Component({
  selector: 'app-quizes',
  standalone: true,
  imports: [],
  templateUrl: './quizes.component.html',
  styleUrl: './quizes.component.scss'
})
export class QuizesComponent {
  telegram = inject(TelegramService);

  constructor() {
    this.telegram.MainBtn.show();
   }
}
