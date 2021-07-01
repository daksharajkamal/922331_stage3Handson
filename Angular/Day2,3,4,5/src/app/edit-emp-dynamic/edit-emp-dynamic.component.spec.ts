import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmpDynamicComponent } from './edit-emp-dynamic.component';

describe('EditEmpDynamicComponent', () => {
  let component: EditEmpDynamicComponent;
  let fixture: ComponentFixture<EditEmpDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmpDynamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmpDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
