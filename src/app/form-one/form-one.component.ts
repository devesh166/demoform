import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.css']
})
export class FormOneComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  userForm;
  ngOnInit() {

    this.userForm = new FormGroup({
       
      firstName:new FormControl('',Validators.required),
      lastName:new FormControl('',Validators.required),
      email:new FormControl('',Validators.compose([Validators.required,])),
      contact:new FormControl('',Validators.compose([Validators.required, Validators.maxLength(10),Validators.minLength(10)])),
      id:new FormControl('',Validators.required),
      address : new FormGroup({
        street:new FormControl('',Validators.required),
        city:new FormControl('',Validators.required),
        state:new FormControl('',Validators.required),
        zip:new FormControl('',Validators.compose([Validators.maxLength(6),Validators.minLength(6)])),
        country:new FormControl('',Validators.required)
      })
      
  }); 
  
  // Validators.pattern('[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}')

  }
  onFormSubmit(){
    console.log(this.userForm.value)
  }


}
