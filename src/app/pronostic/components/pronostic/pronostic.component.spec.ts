import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronosticComponent } from './pronostic.component';

describe('PronosticComponent', () => {
  let component: PronosticComponent;
  let fixture: ComponentFixture<PronosticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PronosticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PronosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
