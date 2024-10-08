import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent implements OnInit {
  public formError: string = '';
  submitted = false;

  credentials = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {}


  public onLoginSubmit(): void {
    this.formError = '';
    if (!this.credentials.email || !this.credentials.password || !this.credentials.name) {
      this.formError = 'All fields are required, please try again';
      this.router.navigateByUrl('#'); 
    } else {
      this.doLogin();
    }
  }

  private doLogin(): void {
    let newUser: User = {
      name: this.credentials.name,
      email: this.credentials.email
    } as User;

    // Trigger the login through the service
    this.authenticationService.login(newUser,
      this.credentials.password);
      
    if(this.authenticationService.isLoggedIn())
    {
      // console.log('Router::Direct');
      this.router.navigate(['']);
    } else {
      var timer = setTimeout(() => {
      if(this.authenticationService.isLoggedIn())
      {
        // console.log('Router::Pause');  
        this.router.navigate(['']);
      } },3000);
    }
      }
}      