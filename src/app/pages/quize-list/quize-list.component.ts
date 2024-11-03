import { Component, OnInit, inject } from '@angular/core';
import { QuizesService, IQuiz } from '../../services/quizes.service';
import { SingleQuizeComponent } from '../single-quize/single-quize.component';
import { CommonModule } from '@angular/common';
import { TelegramService } from '../../services/telegram.service';
import {RouterLink} from "@angular/router";
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-quize-list',
  standalone: true,
  imports: [CommonModule, SingleQuizeComponent, RouterLink, HeaderComponent],
  templateUrl: './quize-list.component.html',
  styleUrl: './quize-list.component.scss'
})
export class QuizeListComponent implements OnInit {
  telegram = inject(TelegramService);
  quizzes: IQuiz[] = [];

  constructor(private quizesService: QuizesService) {
    this.telegram.BackBtn.hide();
  }

  ngOnInit() {
    this.quizesService.quizzes$.subscribe((data) => {
      this.quizzes = data;
      console.log("Квизы после преобразования:", this.quizzes); // Теперь данные должны быть доступны
    });
  }
}




