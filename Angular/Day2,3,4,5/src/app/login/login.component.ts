import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authServe: AuthService) { }

  public Username!:String
  public Password!:String;
  flag = false;
  public msg:String = "Invalid Credentials"
 
  login(){
    this.flag = false;
    if(this.Username == 'admin' && this.Password == 'password'){
      this.authServe.login();
      this.flag = false;
      this.router.navigate(['empList']);
    }
    else{
      this.flag = true;
    }
  }
  ngOnInit(): void {
  }

}
