import { Component, OnInit } from '@angular/core';
import { Department } from '../employee/department';
import { Employee } from '../employee/employee';


@Component({
  selector: 'app-edit-emp-template-driven',
  templateUrl: './edit-emp-template-driven.component.html',
  styleUrls: ['./edit-emp-template-driven.component.css']
})
export class EditEmpTemplateDrivenComponent implements OnInit {
  
  employee!:Employee;

  public trVal = true;
  public falVal = false; 

  departments !: Department[];

  
  constructor() { }

  ngOnInit(): void {
    this.employee={
      id:3,
      name:"John",
      salary:10000,
      permanent:true,
      dept:{
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

    this.departments = [

      { department_id: 1, department_name: "Payroll" },
      
      { department_id: 2, department_name: "Internal" },
      
      { department_id: 3, department_name: "HR" }
      
      ];
  } 

  setDeptName(val : any){
    this.employee.dept.department_name = this.departments[(val.target.value)-1].department_name; 
  }

  onSubmit(){
    console.log(this.employee);
  }

}
