import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../page/clients/register/User';
import { Login } from '../page/clients/login/login';
import { Products } from '../page/server/create-product/Product';

@Injectable({
  providedIn: 'root',
})
export class ApiServicesService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}
  /// products
  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
  getOne(slug: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/course/${slug}`);
  }
  getUpdate(id: any) : Observable<any> {
     return this.http.get(`${this.apiUrl}/courses/${id}/edit`)
  }
  removeItem(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/courses/${user}/delete`, user);
  }
  //account
  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/carts/store`, user);
  }

  checkUser(user: Login): Observable<Login> {
    return this.http.post<Login>(`${this.apiUrl}/carts/checkUser`, user);
  }
  //product
  create(product: Products): Observable<Products> {
    return this.http.post<Products>(`${this.apiUrl}/courses/store`, product);
  }

  ViewUpdate(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/courses/${id}/edit`);
  }

  update(product: Products , id : any): Observable<Products> {
    return this.http.put<Products>(`${this.apiUrl}/courses/${id}`, product);
  }
}
