// single-quize.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { QuizesService, IQuiz } from '../../services/quizes.service';
import { TelegramService } from '../../services/telegram.service';
import { CommonModule } from '@angular/common';
import { HeaderBgOnlyComponent } from '../../shared/header-bg-only/header-bg-only.component';

@Component({
  selector: 'app-single-quize',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderBgOnlyComponent],
  templateUrl: './single-quize.component.html',
  styleUrls: ['./single-quize.component.scss']
})
export class SingleQuizeComponent implements OnInit, OnDestroy {
  quiz: IQuiz | undefined;

  constructor(
    private route: ActivatedRoute,
    private quizesService: QuizesService,
    private telegram: TelegramService,
    private router: Router
  ) {}

  ngOnInit() {
    const quizId = Number(this.route.snapshot.paramMap.get('id'));
    if (quizId) {
      this.quiz = this.quizesService.getQuizById(quizId);
      if (!this.quiz) {
        console.error("Квиз с таким ID не найден!");
      } 
    }

    // Отображаем BackBtn и добавляем обработчик события через onEvent
    this.telegram.BackBtn.show();
    this.telegram.tg.onEvent('backButtonClicked', this.goBack.bind(this));
  }

  ngOnDestroy() {
    // Убираем обработчик события через offEvent
    this.telegram.tg.offEvent('backButtonClicked', this.goBack.bind(this));
  }

  goBack() {
    console.log("Back button clicked"); // Для проверки
    this.router.navigate(['/']);
  }
}
