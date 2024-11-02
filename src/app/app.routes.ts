import { FeedbackComponent } from './pages/feedback/feedback.component';
import { Routes } from '@angular/router';
import { QuizesComponent } from './pages/quizes/quizes.component';
import { ResultsComponent } from './pages/results/results.component';
import { SingleQuizeComponent } from './pages/single-quize/single-quize.component';

export const routes: Routes = [
  {
    path: '', component: QuizesComponent, pathMatch: 'full'
  },
  {
    path: 'result', component: ResultsComponent
  },
  {
    path: 'feedback', component: FeedbackComponent
  },
  {
    path: 'quiz/:id', component: SingleQuizeComponent
  },

];
