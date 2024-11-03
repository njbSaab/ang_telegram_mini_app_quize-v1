// results.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderBgOnlyComponent } from '../../shared/header-bg-only/header-bg-only.component';
import { FormValidationComponent } from '../../components/form-validation/form-validation.component';

@Component({
  selector: 'app-results',
  standalone: true,
  templateUrl: './results.component.html',
  imports: [HeaderBgOnlyComponent, FormValidationComponent],
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  correctAnswers = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    const state = this.router.getCurrentNavigation()?.extras.state;
    this.correctAnswers = state?.['correctAnswers'] || 0;
  }
}
