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

  name!:string;
  email!:string;
  password!:string;
  mobile!:number;

  constructor(){

    console.log('RegisterComponent constructor called');
  }
    onSubmit(){
      console.log('Form Submitted');
      console.log('Name:', this.name, + "email:",this.email, + "password:", this.password, + "mobile:",this.mobile);
 
      const userObj={
      name:this.name,
      email:this.email,
      mobile:this.mobile,
      password:this.password
    };
  console.log('userObj:',userObj);

  const users=[];
  users.push(userObj);
  localStorage.setItem("USERS", JSON.stringify(users));

  alert('Registered successfully!!!');

  window.location.href='/login'

    
    }
}
