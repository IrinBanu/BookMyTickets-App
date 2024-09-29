import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {

email!:string;
password!:string;

constructor(){
  console.log('Login component called');
}

onSubmit(){
  alert(this.email);

  console.log('form submitted');
  console.log('Email:', this.email, 'Password:',this.password);

if (this.email=="maryamirin2022@gmail.com" && this.password=="password") {

  alert("loggedin successfully");
  localStorage.setItem("Logged_In_User", "true");
  localStorage.setItem("Email:", this.email);

  window.location.href="/movies";
}


else{
  alert("Invalid Login Credentials");
}  

}
}
