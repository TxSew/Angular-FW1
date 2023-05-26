import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor(
    private DetailService: ApiServicesService,
    private route: ActivatedRoute
  ) {}

  detailValue: any = {};
  ngOnInit(): void {
    this.DetailService.getOne(this.route.snapshot.params['id']).subscribe({
      next: (data) => {
        this.detailValue = data;
        console.log(this.detailValue);
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
}
