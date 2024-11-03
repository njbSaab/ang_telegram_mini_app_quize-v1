import { HeaderBgOnlyComponent } from './../../shared/header-bg-only/header-bg-only.component';
// quizes.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizesService, IQuiz } from '../../services/quizes.service';
import { ActivatedRoute, Router } from '@angular/router';

interface Question {
  questionText: string;
  answers: { text: string; isCorrect: number }[];
}

@Component({
  selector: 'app-quizes',
  standalone: true,
  imports: [CommonModule, HeaderBgOnlyComponent],
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.scss']
})
export class QuizesComponent implements OnInit {
  quiz: IQuiz | null = null;
  questions: Question[] = [];
  currentQuestionIndex = 0;
  correctAnswersCount = 0;
  time = 20;

  constructor(
    private quizService: QuizesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const quizId = Number(this.route.snapshot.paramMap.get('id')); // Получаем ID квиза
    if (quizId) {
      const quiz = this.quizService.getQuizById(quizId); // Загружаем квиз по ID
      if (quiz) {
        this.quiz = quiz;
        this.questions = quiz.questions ? Object.values(quiz.questions) as Question[] : []; // Преобразуем к массиву вопросов или пустой массив, если вопросы не определены
        console.log("Loaded questions as array:", this.questions); // Выводим вопросы в консоль
      } else {
        console.error("Quiz not found!");
      }
    }
  }



  onAnswerSelected(isCorrect: number) {
    if (isCorrect) {
      this.correctAnswersCount++;
    }
    this.moveToNextQuestion();
  }

  moveToNextQuestion() {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex >= this.questions.length) {
      this.router.navigate(['/result'], { state: { correctAnswers: this.correctAnswersCount } });
    }
  }
}
