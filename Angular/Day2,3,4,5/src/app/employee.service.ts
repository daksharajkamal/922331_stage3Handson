import { Injectable } from '@angular/core';
import { Employee } from './employee/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  employeeList: Employee[] = [
    {id : 1, name : 'John', salary : 10000, permanent : true, dept: { department_id: 1, department_name: "Payroll" }, skill: [{id: 1, name : 'HTML'},{id: 2, name : 'CSS'},{id:3, name : 'JAVASCRIPT'}], dateOfBirth : new Date('12/31/2000') },
    {id : 2, name : 'Johnny', salary : 20000, permanent : true, dept: { department_id: 1, department_name: "Payroll" }, skill: [{id: 1, name : 'HTML'},{id: 2, name : 'CSS'},{id:3, name : 'JAVASCRIPT'}], dateOfBirth : new Date('12/31/2000') },
    {id : 3, name : 'Jenna', salary : 10000, permanent : true, dept: { department_id: 1, department_name: "Payroll" }, skill: [{id: 1, name : 'HTML'},{id: 2, name : 'CSS'},{id:3, name : 'JAVASCRIPT'}], dateOfBirth : new Date('12/31/2000') },
    {id : 4, name : 'Jamela', salary : 10000, permanent : true, dept: { department_id: 1, department_name: "Payroll" }, skill: [{id: 1, name : 'HTML'},{id: 2, name : 'CSS'},{id:3, name : 'JAVASCRIPT'}], dateOfBirth : new Date('12/31/2000') },
    {id : 5, name : 'Jumbo', salary : 10000, permanent : true, dept: { department_id: 1, department_name: "Payroll" }, skill: [{id: 1, name : 'HTML'},{id: 2, name : 'CSS'},{id:3, name : 'JAVASCRIPT'}], dateOfBirth : new Date('12/31/2000') },
  ];

  getAllEmployees() : Employee[]{
    return this.employeeList;
  }


  getEmployee(employeeId: any): Employee{
    console.log(employeeId)
    var selEmp!:Employee; 
    var i:number;
    for(i=0; i<5; i++ ){
      if(this.employeeList[i].id == employeeId){
        selEmp = this.employeeList[i];
        break;
      }
    }
    return selEmp;
  }
}
