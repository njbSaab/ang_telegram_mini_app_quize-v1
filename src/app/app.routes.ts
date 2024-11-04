import { QuizesComponent } from './pages/quizes/quizes.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { Routes } from '@angular/router';
import { ResultsComponent } from './pages/results/results.component';
import { SingleQuizeComponent } from './pages/single-quize/single-quize.component';
import { QuizeListComponent } from './pages/quize-list/quize-list.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '', component: QuizeListComponent, pathMatch: 'full' },
  { path: 'quiz/:id', component: SingleQuizeComponent },
  { path: 'quiz/:id/play', component: QuizesComponent }, // маршрут для QuizesComponent
  { path: 'result', component: ResultsComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'about', component: AboutComponent },
];
