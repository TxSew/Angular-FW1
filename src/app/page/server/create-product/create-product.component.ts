import { Component, OnInit } from '@angular/core';
import { Products } from './Product';
import { NgForm } from '@angular/forms';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  user: Products = {
    name: '',
    imageUrl: '',
    description: '',
    price: 0,
    quantity:'',
    categoryID: '',
  };
  constructor(
    private apiServices: ApiServicesService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {}
  middleware() {
}

 onSelectFile () {

 }
  onSubmit(form: NgForm) {
    this.apiServices
      .create(this.user)
      .subscribe({
        next: (data) => {
          console.log(data);
          if (data) {
            this.toastr.success('Thêm sản phẩm thành công!', 'Toastr fujkjn!');
          } else {
            this.toastr.error('thêm sản phẩm thất bại!', 'Toastr fujkjn!');
          }
          form.resetForm();
        },
        error: (err) => {
          console.log(err);
          this.toastr.error('thêm sản phẩm thất bại!', 'Toastr fujkjn!');
        },
      });
  }
}
