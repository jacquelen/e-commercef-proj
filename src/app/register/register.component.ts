import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from './customvalaitor';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

moviesForm :FormGroup;

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
   this.moviesForm= this.fb.group({
    movieName : [null,[Validators.required,Validators.minLength(3)]],
    Email :[null,[Validators.required,Validators.pattern('^[a-zA-Z0-9_]+@(hotmail|yahoo|gmail)\.com$')]],
    Username: [null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
    password: [null,[Validators.required,Validators.minLength(8)
       ,Validators.pattern('[a-z]{1,}[A-Z]{1,}[0-9]{1,}[*@%$# ]{1,}')]],
    confirmpassword: [null,[Validators.required ,Validators.minLength(8)]],

    address: this.fb.array([]),  ///
   },{
    validator: ConfirmedValidator('password', 'confirmpassword')
   }
   )
  }
  //////////////  
  get moviesFormControls(){
    return this.moviesForm.controls;
  }
  //////////////////
  submitReactiveForm(){
    console.log(this.moviesForm.value)
    let info= JSON.stringify(this.moviesForm.value)
    alert(info);
  }
  Address(){///////
    event.stopPropagation();
    const addressone = this.moviesForm.controls.address as FormArray;
    addressone.push(this.fb.group({
      address :['',Validators.required],
      street: ['',Validators.required],
      city:['',Validators.required],
      country:['',Validators.required]
    }));
  }
  removeaddress(i){
    // console.log(this.moviesForm.controls.address.value)
    let ar =i;
    console.log(ar);
    console.log((ar.length-1))
  }
 
}
/////////////////////
















// this.moviesForm= new FormGroup({
//   movieName :new FormControl(null,[Validators.required,Validators.minLength(3)]),

//   Email :new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z0-9_]+@(hotmail|yahoo|gmail)\.com$')]),

//   Username:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),

//   password: new FormControl(null,[Validators.required,Validators.minLength(8)
//     ,Validators.pattern('[a-z]{1,}[A-Z]{1,}[0-9]{1,}[*@%$# ]{1,}') ]),

//   confirmpassword: new FormControl(null,[Validators.required ,Validators.minLength(8)])
// })