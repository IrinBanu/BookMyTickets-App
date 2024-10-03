import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register2',
  standalone: true,
  imports: [ReactiveFormsModule,],
  templateUrl: './register2.component.html',
  styles: ``
})
export class Register2Component implements OnInit {

  regForm!: FormGroup;

  // name!: string;
  // email!: string;
  // password!: string;

  constructor() {

    console.log('Register2Component constructor called');
  }
  ngOnInit(): void {
    this.regForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
      mobileNumber: new FormControl('', [Validators.required])
    })


  }
  onSubmit() {
    console.log('Form Submitted');
    console.log("valid", this.regForm.valid);
    console.log("value", this.regForm.value);

    const userObj = this.regForm.value;
    console.log('userObj:', userObj);
    
      if (this.regForm.valid) {
  
        alert('Registered successfully!!!');
        window.location.href = '/login'
      } else {
        alert('Please fill required details');
      }

    //console.log('name:', this.name + "email:", this.email + "password:", this.password);
    
    // const userObj = {

    //   name: this.name,
    //   email: this.email,
    //   password: this.password,

    // }

    // // console.log('UserObj:', userObj);

    // // const users = [];
    // users.push(userObj);
    // localStorage.setItem("Users", JSON.stringify(users));




  }
}
