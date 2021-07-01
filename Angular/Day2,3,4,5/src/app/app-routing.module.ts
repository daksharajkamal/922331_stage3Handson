import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { QuantityIncrementComponent } from './quantity-increment/quantity-increment.component';
import { EditEmpTemplateDrivenComponent } from './edit-emp-template-driven/edit-emp-template-driven.component';
import { EditEmpReactiveComponent } from './edit-emp-reactive/edit-emp-reactive.component';
import { EditEmpFormBuilderComponent } from './edit-emp-form-builder/edit-emp-form-builder.component';
import { EditEmpDynamicComponent } from './edit-emp-dynamic/edit-emp-dynamic.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard'

const routes: Routes = [
  { path: '', redirectTo:"/login", pathMatch:"full"},
  { path: 'viewEmployee', component: EmployeeComponent},
  { path: 'editEmployee', component: EditEmpComponent},
  { path: 'incQuant', component: QuantityIncrementComponent},
  { path: 'tempEditEmp', component: EditEmpTemplateDrivenComponent},
  { path: 'rectEditEmp/:id', component: EditEmpReactiveComponent},
  { path: 'fbEditEmp', component: EditEmpFormBuilderComponent },
  { path: 'dEditEmp', component: EditEmpDynamicComponent},
  { path: 'empList', component: EmployeeListComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  EmployeeComponent,
  EditEmpComponent,
  QuantityIncrementComponent,
  EditEmpTemplateDrivenComponent,
  EditEmpReactiveComponent,
  EditEmpFormBuilderComponent,
  EditEmpDynamicComponent,
  EmployeeListComponent,
  LoginComponent
]
