import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaundrysListComponent } from './laundrys-list.component';

describe('LaundrysListComponent', () => {
  let component: LaundrysListComponent;
  let fixture: ComponentFixture<LaundrysListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaundrysListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaundrysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
