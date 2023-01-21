import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestroPlanesComponent } from './nuestro-planes.component';

describe('NuestroPlanesComponent', () => {
  let component: NuestroPlanesComponent;
  let fixture: ComponentFixture<NuestroPlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestroPlanesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestroPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
