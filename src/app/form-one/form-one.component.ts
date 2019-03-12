import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup,FormControl, FormBuilder } from '@angular/forms';

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
       
      firstName:new FormControl(),
      lastName:new FormControl(),
      email:new FormControl(),
      contact:new FormControl(),
      id:new FormControl(),
      address : new FormGroup({
        street:new FormControl(),
        city:new FormControl(),
        state:new FormControl(),
        zip:new FormControl(),
        country:new FormControl()
      })
      
  }); 
  
  

  }
  onFormSubmit(){
    console.log(this.userForm.value)
  }


}
