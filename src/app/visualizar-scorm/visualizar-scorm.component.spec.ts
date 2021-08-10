import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarScormComponent } from './visualizar-scorm.component';

describe('VisualizarScormComponent', () => {
  let component: VisualizarScormComponent;
  let fixture: ComponentFixture<VisualizarScormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarScormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarScormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
