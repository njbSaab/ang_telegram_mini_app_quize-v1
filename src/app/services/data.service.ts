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

  async getQuizzes() {
    const dbRef = firebaseRef(database);
    try {
      const snapshot = await get(child(dbRef, 'quizzes'));
      if (snapshot.exists()) {
        console.log("Данные, полученные из Firebase:", snapshot.val()); // выводим данные в консоль
        return snapshot.val();
      } else {
        console.log("Нет доступных данных");
        return null;
      }
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
      return null;
    }
  }
}
