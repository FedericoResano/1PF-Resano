import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaEstudiantesComponent } from './grilla-estudiantes.component';

describe('GrillaEstudiantesComponent', () => {
  let component: GrillaEstudiantesComponent;
  let fixture: ComponentFixture<GrillaEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrillaEstudiantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
