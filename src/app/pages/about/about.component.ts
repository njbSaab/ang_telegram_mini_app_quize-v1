import { Component } from '@angular/core';
import { HeaderBgOnlyComponent } from '../../shared/header-bg-only/header-bg-only.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderBgOnlyComponent, CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  colorsTitle = [
    'oklch(53.18% 0.28 296.97)' ,  // bright-blue
    'oklch(47.66% 0.246 305.88)',   // electric-violet
    'oklch(69.02% 0.277 332.77) ',  // french-violet
    'oklch(51.01% 0.274 263.83)',  // vivid-pink
    'oklch(61.42% 0.238 15.34)'    // hot-red
  ];
  colorsBgGradient = [
    'linear-gradient(to bottom, oklch(51.01% 0.274 263.83), oklch(53.18% 0.28 296.97))',
    'linear-gradient(to bottom, oklch(69.02% 0.277 332.77), oklch(47.66% 0.246 305.88))',
    'linear-gradient(to bottom, oklch(53.18% 0.28 296.97) , oklch(69.02% 0.277 332.77))',
    'linear-gradient(to bottom, oklch(69.02% 0.277 332.77), oklch(51.01% 0.274 263.83))',
    'linear-gradient(to bottom, oklch(53.18% 0.28 296.97), oklch(61.42% 0.238 15.34))',
  ];
  titleText = [
    "Language Practice:",
    "Critical Thinking: ",
    "Cultural Insight:",
    "Listening and Reading: ",
    "Memory: "
  ];
  descriptionText = [
    "Quizzes make language practice fun and help you learn vocabulary and structures naturally",
    "Quizzes boost problem-solving and logical thinking in a new language.",
    "Quizzes teach cultural facts, helping you connect with speakers.",
    "Quizzes improve comprehension and confidence in the language.",
    "Quizzes enhance both short- and long-term memory skills.",
  ]
}
