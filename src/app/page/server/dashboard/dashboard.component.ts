import { Component, NgZone, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  productList: any[] = [];
  updateValue: any = {};
  constructor(
    private apiService: ApiServicesService,
    private toast: ToastrService,
  ) { }

  ngOnInit(): void {
    this.apiService.getAll().subscribe({
      next: (data) => {
        this.productList = data;

      },
      error: () => {
      }
    });
  }

  onRemove(item: any): void {
    console.log(item);
    this.apiService.removeItem(item).subscribe();
    this.toast.success('Remove!', 'Xóa thành công!');
    window.location.reload();
  }

}
