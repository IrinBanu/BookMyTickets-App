import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent implements OnInit{

isLoggedIn = false;

constructor(){
  console.log("HeaderComponent Called");
}

ngOnInit(): void {
  //fetch from localstorage whether user is loggedin
  this.isLoggedIn=localStorage.getItem("Logged_In_User")=="true";
}

logout(){
  //localStorage.removeItem("Logged_In_User");
  localStorage.clear();
  alert("Successfully LoggedOut!!");

  window.location.href="/login"
}

}
