import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  checkRole: any;
  isCheck: any = false;
  login: string = 'login';

   loggout() {
   localStorage.removeItem('user')
   window.location.reload()
   }
  ngOnInit(): void {
    this.checkRole = localStorage.getItem('user');
    if (this.checkRole) {
      this.checkRole = JSON.parse(this.checkRole);
      console.log(this.checkRole);
      this.isCheck = true;
    }
  }
}
