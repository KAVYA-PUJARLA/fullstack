import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {RegistryService} from '../registry.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  UserRegister:FormGroup;
  validation_error:string;
  constructor(private registryService:RegistryService) { 
    this.UserRegister=new FormGroup({
      firstName:new FormControl('',Validators.required),
      lastName:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      cpassword:new FormControl('',Validators.required),
    });
  }

  ngOnInit() {
  }
  Create_user(){
    if(this.UserRegister.valid){
// console.log(this.UserRegister.value);
this.registryService.addUser(this.UserRegister.value);
  }else{
    this.validation_error="Form is invalid";
  }
}
}
