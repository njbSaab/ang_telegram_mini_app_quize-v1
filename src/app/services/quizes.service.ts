// quizes.service.ts
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IAnswer {
  text: string;
  isCorrect: number;
}

export interface IQuestion {
  questionText: string;
  answers: IAnswer[];
  img?: string;
}

export interface IQuiz {
  id: number;
  img: string;
  title: string;
  description: string;
  questions?: IQuestion[];
}

@Injectable({
  providedIn: 'root'
})
export class QuizesService {
  private quizzesSubject = new BehaviorSubject<IQuiz[]>([]);
  quizzes$: Observable<IQuiz[]> = this.quizzesSubject.asObservable();

  constructor(private dataService: DataService) {
    this.loadQuizzes();
  }

  private async loadQuizzes() {
    const data = await this.dataService.getQuizzes();
    if (data) {
      const quizzesArray = Object.values(data) as IQuiz[];
      this.quizzesSubject.next(quizzesArray);
      console.log("Преобразованные данные в массив:", quizzesArray);
    }
  }

  getAllQuizes(): IQuiz[] {
    return this.quizzesSubject.value;
  }
  getQuizById(id: number): IQuiz | undefined {
    const quiz = this.quizzesSubject.value.find((quiz) => quiz.id === id);
    console.log("Fetched Quiz:", quiz); // Логируем весь квиз, включая вопросы
    return quiz;
  }  
  // Новый метод для получения вопросов квиза по ID
  async getQuestionsByQuizId(quizId: string): Promise<IQuestion[] | null> {
    const questionsData = await this.dataService.getQuizQuestions(quizId);
    if (questionsData) {
      return Object.values(questionsData) as IQuestion[];
    }
    return null;
  }
}
