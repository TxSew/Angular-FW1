import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/page/clients/home/home.component';
import { NotFoundComponent } from 'src/app/page/clients/not-found/not-found.component';
import { ProductComponent } from '../page/clients/product/product.component';
import { RegisterComponent } from '../page/clients/register/register.component';
import { LoginComponent } from '../page/clients/login/login.component';
import { DashboardComponent } from '../page/server/dashboard/dashboard.component';
import { DetailComponent } from '../page/clients/detail/detail.component';
import { CreateProductComponent } from '../page/server/create-product/create-product.component';
import { UpdateProductComponent } from '../page/server/update-product/update-product.component';
import { AdminComponent } from '../page/server/admin/admin.component';
import { AuthGuard } from '../middleware/checkLogin';
const routes: Routes = [
  // ===  CLIENTS PAGE === //
  { path: '', component: ProductComponent },
  { path: 'home', component: HomeComponent, title: 'home page' },
  {
    path: 'account/register',
    component: RegisterComponent,
    title: 'register page',
  },
  { path: 'account/login', component: LoginComponent, title: 'login page' },
  { path: 'products/:id', component: DetailComponent, title: 'detail' },

  // == BACKEND PAGE === //
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'create', component: CreateProductComponent },
      { path: 'update/:id', component: UpdateProductComponent },

    ],
     canActivate: [AuthGuard]
  },

  //== DEFAULT PAGE == /{
  {
    path: '**',
    component: NotFoundComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
