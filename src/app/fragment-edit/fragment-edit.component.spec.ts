import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FragmentEditComponent } from './fragment-edit.component';

describe('FragmentEditComponent', () => {
  let component: FragmentEditComponent;
  let fixture: ComponentFixture<FragmentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FragmentEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FragmentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
