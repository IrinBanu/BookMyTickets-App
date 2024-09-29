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
  mobile!:number;
  password!:string;

  constructor(){

    console.log('RegisterComponent constructor called');
  }
    onSubmit(){
      console.log('Registered successfully');
      console.log('Name:', this.name, + "email:",this.email, + "password:", this.password);

    
}
}
