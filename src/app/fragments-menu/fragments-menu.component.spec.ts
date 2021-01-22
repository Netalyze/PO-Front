import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FragmentsMenuComponent } from './fragments-menu.component';

describe('FragmentsMenuComponent', () => {
  let component: FragmentsMenuComponent;
  let fixture: ComponentFixture<FragmentsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FragmentsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FragmentsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
