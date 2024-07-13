import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMasterhaComponent } from './header-masterha.component';

describe('HeaderMasterhaComponent', () => {
  let component: HeaderMasterhaComponent;
  let fixture: ComponentFixture<HeaderMasterhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderMasterhaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMasterhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
