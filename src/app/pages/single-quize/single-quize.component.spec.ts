import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleQuizeComponent } from './single-quize.component';

describe('SingleQuizeComponent', () => {
  let component: SingleQuizeComponent;
  let fixture: ComponentFixture<SingleQuizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleQuizeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleQuizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
