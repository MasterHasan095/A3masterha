import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BronzeMasterhaComponent } from './bronze-masterha.component';

describe('BronzeMasterhaComponent', () => {
  let component: BronzeMasterhaComponent;
  let fixture: ComponentFixture<BronzeMasterhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BronzeMasterhaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BronzeMasterhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
