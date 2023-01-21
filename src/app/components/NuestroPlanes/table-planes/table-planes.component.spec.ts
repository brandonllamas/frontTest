import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePlanesComponent } from './table-planes.component';

describe('TablePlanesComponent', () => {
  let component: TablePlanesComponent;
  let fixture: ComponentFixture<TablePlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePlanesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
