import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeLearningComponent } from './exe-learning.component';

describe('ExeLearningComponent', () => {
  let component: ExeLearningComponent;
  let fixture: ComponentFixture<ExeLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExeLearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExeLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
