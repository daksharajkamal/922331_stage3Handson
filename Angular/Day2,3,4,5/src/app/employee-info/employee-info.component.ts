import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../employee/employee';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

  constructor() { }

  @Input()
  public employee!: Employee;
  

  ngOnInit(): void {
  }

}

