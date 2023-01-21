import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguroClubComponent } from './seguro-club.component';

describe('SeguroClubComponent', () => {
  let component: SeguroClubComponent;
  let fixture: ComponentFixture<SeguroClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguroClubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeguroClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
