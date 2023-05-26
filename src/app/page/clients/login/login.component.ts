import { Component } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { NgForm } from '@angular/forms';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: Login = {
    username: '',
    password: '',
  };
  constructor(private Apiservices: ApiServicesService) {}
  onSubmit(form: NgForm) {
    console.log(this.user);
    this.Apiservices.checkUser(this.user).subscribe({
      next: (data) => {
        console.log(data);
        if (data) {
          localStorage.setItem('user', JSON.stringify(data));
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
