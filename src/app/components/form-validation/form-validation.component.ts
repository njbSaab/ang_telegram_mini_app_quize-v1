import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-validation',
  standalone: true,
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss'],
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
})
export class FormValidationComponent implements OnInit {
  form: FormGroup;
  isCodeVisible = false; // Показывает поле для ввода кода после успешной отправки

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      code: [{ value: '', disabled: true }, Validators.required], // Поле "code" изначально отключено
    });
  }

  ngOnInit(): void {}

  getCode(): void {
    if (this.form.invalid) return;

    // Имитируем успешную отправку и делаем поле для кода активным
    console.log('Form Data:', this.form.value); // Имитация отправки
    this.isCodeVisible = true; // Отображаем поле для кода
    this.form.get('code')?.enable();
    this.form.get('name')?.disable();
    this.form.get('email')?.disable();
  }
}
