import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Department } from '../employee/department';
import { Employee } from '../employee/employee';

@Component({
  selector: 'app-edit-emp-dynamic',
  templateUrl: './edit-emp-dynamic.component.html',
  styleUrls: ['./edit-emp-dynamic.component.css']
})
export class EditEmpDynamicComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  public trVal = true;
  public falVal = false; 
  public index = 0;
  
  employee: Employee = {
    id: 1,
    name!: 'John',
    salary: 10000,
    permanent: true,
    dept: {
      department_id:1,
      department_name:'payroll'
    },
    skill:[],
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

    'set_department_name': [this.employee.dept.department_name],

    'skills': this.fb.array([
      this.fb.control('')
    ])
  });

  get name() { return this.empForm.get('name'); }
  get salary() { return this.empForm.get('salary'); }
  get skills() {
    return this.empForm.get('skills') as FormArray;
  }
  

  setDeptName(val : any){
    this.employee.dept.department_name = this.departments[(val.target.value)-1].department_name; 
    this.empForm.patchValue({set_department_name: this.employee.dept.department_name});
  }

  addSkill() {
    this.skills.push(this.fb.control(''));
    var arr = this.empForm.get('skills') as FormArray;
    var skill_name:string = arr.at(this.index).value 
    var i:number = this.index + 1;
    this.employee.skill.push({id: i, name: skill_name})
    this.index+=1;
  }

  onSubmit(){
    console.log(this.employee);
  }

  ngOnInit(): void {
  }
}
