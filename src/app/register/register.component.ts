import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styles: ``
})
export class RegisterComponent {

  name!: string;
  email!: string;
  password!: string;

  constructor() {

    console.log('RegisterComponent constructor called');
  }
  onSubmit() {
    console.log('Form Submitted');
    console.log('name:', this.name + "email:", this.email + "password:", this.password);

    const userObj = {
      name: this.name,
      email: this.email,
      password: this.password,

    }

    console.log('UserObj:', userObj);

    const users = [];
    users.push(userObj);
    localStorage.setItem("Users", JSON.stringify(users));

    alert('Registered successfully!!!');

    window.location.href = '/login'


  }
}
