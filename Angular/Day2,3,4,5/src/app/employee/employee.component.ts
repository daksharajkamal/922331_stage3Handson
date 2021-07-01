import { Component, OnInit } from '@angular/core';
import {Employee} from './employee';
import {Department} from './department';
import {Skill} from './skill';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{

  employee!:Employee;
  department!: Department;
  skill!: Skill[];

  displayStatus = true;
  
  constructor() { }

  
  ngOnInit(): void {
    
    this.department = {department_id: 1, department_name: 'Payroll' }

    this.skill = [{id: 1, name : 'HTML'},{id: 2, name : 'CSS'},{id:3, name : 'JAVASCRIPT'}]

    this.employee = {
      id : 1,
      name : 'John',
      salary : 10000,
      permanent : true,
      dept : this.department,
      skill : this.skill,
      dateOfBirth : new Date('12/31/2000')
    }
    
  }

}
