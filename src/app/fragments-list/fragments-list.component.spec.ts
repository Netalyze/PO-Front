import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FragmentsListComponent } from './fragments-list.component';

describe('FragmentsListComponent', () => {
  let component: FragmentsListComponent;
  let fixture: ComponentFixture<FragmentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FragmentsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FragmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
