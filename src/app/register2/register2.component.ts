import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register2',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register2.component.html',
  styles: ``
})
export class Register2Component implements OnInit {

  regForm!: FormGroup;

  // name!: string;
  // email!: string;
  // password!: string;

  constructor(private toastr:ToastrService, private fb:FormBuilder) {

    console.log('Register2Component constructor called');
  }
  ngOnInit(): void {
  //   this.regForm = new FormGroup({
  //     name: new FormControl('', [Validators.required]),
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
  //     mobileNumber: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(12)])
  //   })
 
  this.regForm=this.fb.group({
    name:['', [Validators.required]],
    email:['',[Validators.required, Validators.email]],
    password:['', [ Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
    mobileNumber:['',[Validators.required]]
  })
  
}

  get name(){
    return this.regForm.controls["name"];
  }

  get email(){
    return this.regForm.controls["email"];
  }

  get password(){
    return this.regForm.controls["password"];
  }

  get mobileNumber(){
    return this.regForm.controls["mobileNumber"];
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
