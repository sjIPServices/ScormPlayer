import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScormSolisticaComponent } from './scorm-solistica.component';

describe('ScormSolisticaComponent', () => {
  let component: ScormSolisticaComponent;
  let fixture: ComponentFixture<ScormSolisticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScormSolisticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScormSolisticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
