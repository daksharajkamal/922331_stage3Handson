import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Karma Test to check wether the Department property and corresponding HTML value is same
  it(`should have same favorite movie value`, () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const result = compiled.querySelector('#departmentName').textContent;
    console.log(result)
    const app = fixture.componentInstance;
    expect("Department Name: " + app.department.department_name).toEqual(result);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
