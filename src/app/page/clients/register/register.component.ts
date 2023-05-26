import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { User } from './User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: User = {
    name: '',
    email: '',
    username: '',
    password: '',
  }

  constructor(private apiServices: ApiServicesService , private toast: ToastrService ) { }
  onSubmit(form: NgForm) {
    this.apiServices.register(this.user).subscribe({
      next: (element) => {
         console.log(element)
          if(form.valid) {
            this.toast.success('register!' , 'Đăng kí tài khoản thành công !')
          }
        form.resetForm()
      },
      error: (error) => {
        this.toast.error('register!' , 'Bạn chưa nhập thông tin đăng kí!')
      }
    })
  }

}
