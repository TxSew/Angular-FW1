import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent implements OnInit {
  products: any = {};

  constructor(
    private apiService: ApiServicesService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.apiService.getOne(this.route.snapshot.params['id']).subscribe({
      next: (data) => {
        this.products = data;
      },
    });
  }

  onSubmit(form: NgForm) {
     console.log(form.value)
    this.apiService.update(form.value, this.products._id).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
