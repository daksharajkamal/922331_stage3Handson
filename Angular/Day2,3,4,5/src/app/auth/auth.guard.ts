import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { AuthService } from '../auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authServe: AuthService, private route: Router ){}

  canActivate(): boolean {
    if(this.authServe.isLoggedIn() == false){
      this.route.navigate(['/login']);
      return false;
    }
    return true;
  }
  
}
