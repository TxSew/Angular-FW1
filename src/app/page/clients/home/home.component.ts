import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  data: any[] = []
  constructor(private apiServices: ApiServicesService) { }
  ngOnInit(): void {
    this.apiServices.getAll().subscribe(
      {
        next: (response) => {
          this.data = response
        },
        error: (err) => {
          console.log(`error data , ${err}`)
        }
      }
    )

  }

}
