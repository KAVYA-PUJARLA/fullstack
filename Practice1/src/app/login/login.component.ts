import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import{Router} from '@angular/router';
import {Observable} from 'rxjs';


import {RegistryService} from '../registry.service';
import {user} from 'models/adduser'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRegistry:FormGroup;
  users:user[];
  user:user;

  constructor(private service :RegistryService,private router: Router) {

    this.loginRegistry=new FormGroup({
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
    });
   }

  ngOnInit() {
  }
  login_user(){
    this.service.login(this.loginRegistry.value).subscribe((data:user)=>{
      this.user=data;
      this.router.navigate(['/buttonpage']); 
    });
    // this.service.login(this.loginRegistry.value);
    // this.service.login(this.loginRegistry.value);
    // if(user){
    // this.router.navigate(['/buttonpage']); 
    // }
    // else{
    //   console.log("users not found");
    // }
}
}
