import { HeaderBgOnlyComponent } from './../../shared/header-bg-only/header-bg-only.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
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

export class QuizesComponent implements OnInit, OnDestroy {
  quiz: IQuiz | null = null;
  questions: Question[] = [];
  currentQuestionIndex = 0;
  correctAnswersCount = 0;
  time = 20;
  maxTime = 20;
  interval: any;
  isAlmostFinished = false;
  lineWidth = 0;
  selectedAnswerIndex: number | null = null; // Индекс выбранного ответа
  answerColors: string[] = []; // Хранение уникальных цветов для текущих ответов

  colorsInput = [
    'oklch(47.66% 0.246 305.88)',   // electric-violet
    'oklch(69.02% 0.277 332.77)',  // french-violet
    'oklch(51.01% 0.274 263.83)',  // vivid-pink
    'oklch(53.18% 0.28 296.97)'    // bright-blue
  ];

  constructor(
    private quizService: QuizesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const quizId = Number(this.route.snapshot.paramMap.get('id'));
    if (quizId) {
      const quiz = this.quizService.getQuizById(quizId);
      if (quiz) {
        this.quiz = quiz;
        this.questions = quiz.questions ? Object.values(quiz.questions) as Question[] : [];
        this.assignUniqueColors(); // Задаем уникальные цвета для ответов
        this.startCountdown();
      } else {
        console.error("Quiz not found!");
      }
    }
  }

  // Перемешивает цвета и задает уникальный цвет для каждого ответа
  assignUniqueColors() {
    const shuffledColors = [...this.colorsInput].sort(() => Math.random() - 0.5);
    this.answerColors = this.questions[this.currentQuestionIndex].answers.map((_, index) => shuffledColors[index]);
  }

  startCountdown() {
    this.interval = setInterval(() => {
      if (this.time > 0) {
        this.time--;
        this.lineWidth = ((this.maxTime - this.time) / this.maxTime) * 100;
        this.isAlmostFinished = this.time <= 3;
      } else {
        clearInterval(this.interval);
        this.moveToNextQuestion();
      }
    }, 1000);
  }

  onAnswerSelected(isCorrect: number, answerIndex: number) {
    this.selectedAnswerIndex = answerIndex; // Сохраняем индекс выбранного ответа

    if (isCorrect) {
      this.correctAnswersCount++;
    }

    localStorage.setItem('correctAnswersCount', this.correctAnswersCount.toString());
    localStorage.setItem('currentQuestionIndex', (this.currentQuestionIndex + 1).toString());

    clearInterval(this.interval);
    this.moveToNextQuestion();
  }

  moveToNextQuestion() {
    setTimeout(() => {
      this.currentQuestionIndex++;
      this.time = this.maxTime;
      this.lineWidth = 0;
      this.isAlmostFinished = false;
      this.selectedAnswerIndex = null; // Сброс выбранного ответа при переходе к новому вопросу

      if (this.currentQuestionIndex < this.questions.length) {
        this.assignUniqueColors(); // Задаем новые уникальные цвета для следующего вопроса
        this.startCountdown();
      } else {
        localStorage.setItem('finalCorrectAnswers', this.correctAnswersCount.toString());
        localStorage.setItem('currentQuestionIndex', this.currentQuestionIndex.toString());
        this.router.navigate(['/result']);
      }
    }, 300); // Задержка 0.3 секунды (300 миллисекунд)
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
