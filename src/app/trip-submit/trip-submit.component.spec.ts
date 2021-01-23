import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripSubmitComponent } from './trip-submit.component';

describe('TripSubmitComponent', () => {
  let component: TripSubmitComponent;
  let fixture: ComponentFixture<TripSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
