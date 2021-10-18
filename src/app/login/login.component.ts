import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login :FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.login =new FormGroup({
      emailadress: new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z0-9_]+@(hotmail|yahoo|gmail)\.com$')]),
      password: new FormControl(null,[Validators.required,Validators.minLength(8)
        ,Validators.pattern('[a-z]{1,}[A-Z]{1,}[0-9]{1,}[*@%$# ]{1,}')]),
    })
  }
  get logFormControls(){
    return this.login.controls;
   }

  submitReactiveloginForm(){
    console.log(this.login.value)
  }
}
