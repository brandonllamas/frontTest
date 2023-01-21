import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPeludoComponent } from './item-peludo.component';

describe('ItemPeludoComponent', () => {
  let component: ItemPeludoComponent;
  let fixture: ComponentFixture<ItemPeludoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPeludoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemPeludoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
