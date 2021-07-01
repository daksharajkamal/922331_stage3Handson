import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Department } from '../employee/department';
import { Employee } from '../employee/employee';

@Component({
  selector: 'app-edit-emp-form-builder',
  templateUrl: './edit-emp-form-builder.component.html',
  styleUrls: ['./edit-emp-form-builder.component.css']
})
export class EditEmpFormBuilderComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public trVal = true;
  public falVal = false; 
  
  employee: Employee = {
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
  
  departments : Department[] = [

    { department_id: 1, department_name: "Payroll" },
    
    { department_id: 2, department_name: "Internal" },
    
    { department_id: 3, department_name: "HR" }
    
  ];

  //Form using FB
  empForm = this.fb.group({

    'name': [this.employee.name,[Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
    
    'salary': [this.employee.salary,[Validators.required]],

    'permanent': [this.employee.permanent],

    'select_department_id': [this.employee.dept.department_id],

    'set_department_name': [this.employee.dept.department_name]

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
