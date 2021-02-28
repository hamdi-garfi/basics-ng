import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwCheckComponent } from './pw-check.component';

describe('PwCheckComponent', () => {
  let component: PwCheckComponent;
  let fixture: ComponentFixture<PwCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PwCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
