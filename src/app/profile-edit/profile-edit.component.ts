import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, RouterLink],
  templateUrl: './profile-edit.component.html',
  styles: ``
})
export class ProfileEditComponent implements OnInit {

  user: any;

  editUserForm!: FormGroup;

  constructor(private toastr: ToastrService, private fb: FormBuilder) {

    console.log('Profile Edit constructor called');
  }
  ngOnInit(): void {

    this.editUserForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      mobileNumber: ['', [Validators.required]]
    })
    this.loadUser();
  }

  get name() {
    return this.editUserForm.controls["name"];
  }

  get email() {
    return this.editUserForm.controls["email"];
  }

  get password() {
    return this.editUserForm.controls["password"];
  }

  get mobileNumber() {
    return this.editUserForm.controls["mobileNumber"];
  }


  onSubmit() {
    alert('form updated');
    const formValues = this.editUserForm.value //{name:'', email:'', password:''}
    console.log('formValues:', formValues);

    if (this.editUserForm.invalid) {//valid=true/false
      this.toastr.error('please fill all the details');
    } else {
      this.toastr.success('profile successfully updated');
    }
  }

  //fetch loggedin details form backend API
  loadUser() {
    this.user = { id: 1, name: 'Shakira', email: 'reshakirin@gmail.com', password: 'pass1234' };//db
    this.editUserForm.patchValue(this.user);
  }
}


