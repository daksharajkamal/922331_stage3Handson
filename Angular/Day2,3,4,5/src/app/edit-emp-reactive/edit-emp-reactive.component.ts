import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Department } from '../employee/department';
import { Employee } from '../employee/employee';
import { ActivatedRoute } from "@angular/router";
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-emp-reactive',
  templateUrl: './edit-emp-reactive.component.html',
  styleUrls: ['./edit-emp-reactive.component.css']
})
export class EditEmpReactiveComponent implements OnInit {
 

  constructor(private route : ActivatedRoute, private employeeService : EmployeeService) { }


  
  

  public trVal = true;
  public falVal = false; 

  employeeId = this.route.snapshot.paramMap.get('id');
  
  employee: Employee = this.employeeService.getEmployee(this.employeeId)
  
  /*
  {
    id: 1,
    name!: 'John',
    salary: 10000,
    permanent: true,
    dept: {
      department_id:1,
      department_name:'payroll'
    },
    skill:[{
      id:1,
      name:"HTML"
  }, {
      id:2,
      name:"CSS"
  }, {
      id:3,
      name:"JAVASCRIPT"
  }],
  dateOfBirth: new Date('12/31/2000'),
  }
  */
  departments : Department[] = [

    { department_id: 1, department_name: "Payroll" },
    
    { department_id: 2, department_name: "Internal" },
    
    { department_id: 3, department_name: "HR" }
    
  ];

  empForm = new FormGroup({

    'name': new FormControl(this.employee.name, [
    
    Validators.required,
    
    Validators.minLength(4),
    
    Validators.maxLength(20)
    
    ]),
    
    'salary': new FormControl(this.employee.salary, [
      Validators.required
    ]),

    'permanent': new FormControl(this.employee.permanent),

    'select_department_id': new FormControl(this.employee.dept.department_id),

    'set_department_name': new FormControl(this.employee.dept.department_name)

  });

  get name() { return this.empForm.get('name'); }
  get salary() { return this.empForm.get('salary'); }
  

  setDeptName(val : any){
    this.employee.dept.department_name = this.departments[(val.target.value)-1].department_name; 
    this.empForm.patchValue({set_department_name: this.employee.dept.department_name});
  }

  onSubmit(){
    console.log(this.employee);
  }

  ngOnInit(): void {

    

}

}


