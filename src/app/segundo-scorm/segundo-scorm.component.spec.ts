import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoScormComponent } from './segundo-scorm.component';

describe('SegundoScormComponent', () => {
  let component: SegundoScormComponent;
  let fixture: ComponentFixture<SegundoScormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundoScormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoScormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
