import { Component, OnInit } from '@angular/core';
import { Department } from '../employee/department';
import { Employee } from '../employee/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }
    employeeList: Employee[] = [
      {id : 1, name : 'John', salary : 10000, permanent : true, dept: { department_id: 1, department_name: "Payroll" }, skill: [{id: 1, name : 'HTML'},{id: 2, name : 'CSS'},{id:3, name : 'JAVASCRIPT'}], dateOfBirth : new Date('12/31/2000') },
      {id : 2, name : 'Johnny', salary : 10000, permanent : true, dept: { department_id: 1, department_name: "Payroll" }, skill: [{id: 1, name : 'HTML'},{id: 2, name : 'CSS'},{id:3, name : 'JAVASCRIPT'}], dateOfBirth : new Date('12/31/2000') },
      {id : 3, name : 'Jenna', salary : 10000, permanent : true, dept: { department_id: 1, department_name: "Payroll" }, skill: [{id: 1, name : 'HTML'},{id: 2, name : 'CSS'},{id:3, name : 'JAVASCRIPT'}], dateOfBirth : new Date('12/31/2000') },
      {id : 4, name : 'Jamela', salary : 10000, permanent : true, dept: { department_id: 1, department_name: "Payroll" }, skill: [{id: 1, name : 'HTML'},{id: 2, name : 'CSS'},{id:3, name : 'JAVASCRIPT'}], dateOfBirth : new Date('12/31/2000') },
      {id : 5, name : 'Jumbo', salary : 10000, permanent : true, dept: { department_id: 1, department_name: "Payroll" }, skill: [{id: 1, name : 'HTML'},{id: 2, name : 'CSS'},{id:3, name : 'JAVASCRIPT'}], dateOfBirth : new Date('12/31/2000') },
    ];

    filteredEmployees!: Employee[]
    public searchKey!:String
/*
    willMatch(element: any, index: any, array: any){
      return element.match(this.expr);
    }
*/
    search(){
      this.filteredEmployees = this.employeeList.filter(emp => emp.name.toLowerCase()==this.searchKey.toLowerCase())
    }

  ngOnInit(): void {
  }

}


