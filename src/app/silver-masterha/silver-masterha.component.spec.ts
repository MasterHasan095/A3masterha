import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilverMasterhaComponent } from './silver-masterha.component';

describe('SilverMasterhaComponent', () => {
  let component: SilverMasterhaComponent;
  let fixture: ComponentFixture<SilverMasterhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SilverMasterhaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SilverMasterhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
