import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(public authService : AuthService, public router:Router){

  }
  
  canActivate():boolean{
    if(this.authService.isAuthenticated()){
      this.router.navigate(['emp'])
      return false
    }
    return true
  }
}
