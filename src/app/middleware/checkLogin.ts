import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  checkLogin: any ;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    // Kiểm tra quyền truy cập ở đây
    // Trong ví dụ này, chúng ta sẽ cho phép truy cập nếu người dùng đã đăng nhập
    this.checkLogin = localStorage.getItem('user');
    const isAuthenticated = JSON.parse(this.checkLogin); // Kiểm tra xem người dùng đã đăng nhập hay chưa
    if (isAuthenticated) {
      return true; // Cho phép truy cập
    }
   else {
      alert('bạn vui lòng đăng nhập để có quyền truy câp');
      // Người dùng chưa đăng nhập, chuyển hướng đến trang đăng nhập
      return this.router.createUrlTree(['account/login']);
    }
  }
}
