import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/model/auth';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    name : string = '';
    username : string = '';
    password : string = '';
    auth :Auth = new Auth();
    constructor(private authService : AuthService, private route : Router) {}
    ngOnInit(): void {
      this.username = '';
      this.password = '';
      this.name = '';
    }
    signup(){
      this.auth.username = this.username;
    this.auth.password = this.password;
    this.auth.name = this.name;
    this.auth.role = 'user';
    console.log(this.auth.username+""+this.auth.password+this.auth.name+this.auth.role )
    this.authService.signup(this.auth).subscribe(res =>{
      if(res==null){
        alert("registrataion failed");
        this.ngOnInit();
      }
      else{
        console.log("registration successfull");
        alert("registration successfull");
        this.route.navigate(['/']);
    }
    },err =>{
      alert("registraion failed");
      this.ngOnInit();
    })
  }
    }






