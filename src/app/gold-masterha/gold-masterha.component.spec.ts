import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldMasterhaComponent } from './gold-masterha.component';

describe('GoldMasterhaComponent', () => {
  let component: GoldMasterhaComponent;
  let fixture: ComponentFixture<GoldMasterhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoldMasterhaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldMasterhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
