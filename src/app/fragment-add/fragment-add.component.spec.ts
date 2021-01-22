import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FragmentAddComponent } from './fragment-add.component';

describe('FragmentAddComponent', () => {
  let component: FragmentAddComponent;
  let fixture: ComponentFixture<FragmentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FragmentAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FragmentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
