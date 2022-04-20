import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLaundryComponent } from './add-laundry.component';

describe('AddLaundryComponent', () => {
  let component: AddLaundryComponent;
  let fixture: ComponentFixture<AddLaundryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLaundryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLaundryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
