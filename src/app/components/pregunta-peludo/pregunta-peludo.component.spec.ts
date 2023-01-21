import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaPeludoComponent } from './pregunta-peludo.component';

describe('PreguntaPeludoComponent', () => {
  let component: PreguntaPeludoComponent;
  let fixture: ComponentFixture<PreguntaPeludoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntaPeludoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntaPeludoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
