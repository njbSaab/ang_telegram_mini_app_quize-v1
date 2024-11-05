// data.service.ts
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref as firebaseRef, get, child } from 'firebase/database';
import { environment } from '../../environment/environment';

const app = initializeApp(environment.firebaseConfig);
const database = getDatabase(app);

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}

  // Получение всех квизов
  async getQuizzes() {
    const dbRef = firebaseRef(database);
    try {
      const snapshot = await get(child(dbRef, 'quizzes'));
      if (snapshot.exists()) {
        // console.log("Данные, полученные из Firebase:", snapshot.val()); // выводим данные в консоль
        return snapshot.val();
      } else {
        // console.log("Нет доступных данных");
        return null;
      }
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
      return null;
    }
  }

  // Получение вопросов конкретного квиза по quizId
  async getQuizQuestions(quizId: string) {
    const dbRef = firebaseRef(database, `quizzes/${quizId}/questions`);
    try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        // console.log("Вопросы, полученные для квиза:", snapshot.val()); // выводим вопросы в консоль
        return snapshot.val();
      } else {
        console.log("Нет доступных вопросов для данного квиза");
        return null;
      }
    } catch (error) {
      console.error("Ошибка при получении вопросов квиза:", error);
      return null;
    }
  }
}
