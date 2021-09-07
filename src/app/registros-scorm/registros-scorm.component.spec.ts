import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosScormComponent } from './registros-scorm.component';

describe('RegistrosScormComponent', () => {
  let component: RegistrosScormComponent;
  let fixture: ComponentFixture<RegistrosScormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrosScormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrosScormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
