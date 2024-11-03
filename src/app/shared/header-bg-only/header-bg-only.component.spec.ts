import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBgOnlyComponent } from './header-bg-only.component';

describe('HeaderBgOnlyComponent', () => {
  let component: HeaderBgOnlyComponent;
  let fixture: ComponentFixture<HeaderBgOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderBgOnlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderBgOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
