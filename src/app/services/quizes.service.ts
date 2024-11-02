// quizes.service.ts
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IQuiz {
  id: number;
  img: string;
  title: string;
  description: string;
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
      this.quizzesSubject.next(quizzesArray); // Обновляем Observable новыми данными
      console.log("Преобразованные данные в массив:", quizzesArray);
    }
  }


  getAllQuizes(): IQuiz[] {
    return this.quizzesSubject.value;
  }

  getQuizById(id: number): IQuiz | undefined {
    return this.quizzesSubject.value.find((quiz) => quiz.id === id);
  }
}
