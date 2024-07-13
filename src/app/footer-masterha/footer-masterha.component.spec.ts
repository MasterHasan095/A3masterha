import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMasterhaComponent } from './footer-masterha.component';

describe('FooterMasterhaComponent', () => {
  let component: FooterMasterhaComponent;
  let fixture: ComponentFixture<FooterMasterhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterMasterhaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterMasterhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
