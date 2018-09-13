import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import {LoginService} from '../services/login.service';
import {User} from "../model/user";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router ,private logInService:LoginService,
              ) { }
  username: string;
  password: string;
  user:any;
  authenticated:boolean=false;
  ngOnInit() {
  }
  login(): void {
    this.logInService.isVaildIser(this.username).subscribe(data => {
      this.user = data;
      sessionStorage.setItem("userRole",this.user.role); 
      sessionStorage.setItem("username",this.user.userName);  
      sessionStorage.setItem("email",this.user.email);  
      sessionStorage.setItem("id",this.user.id); 
      sessionStorage.setItem("token","1234");  
      if(this.user !=undefined) {
            this.authenticated=true;
            this.router.navigate(["home"]);
      }else {
        alert("Invalid User Name");
      }

    });
   
  }
}
