import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedalsMasterhaComponent } from './medals-masterha.component';

describe('MedalsMasterhaComponent', () => {
  let component: MedalsMasterhaComponent;
  let fixture: ComponentFixture<MedalsMasterhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedalsMasterhaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedalsMasterhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
