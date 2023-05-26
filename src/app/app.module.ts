import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DetailComponent } from './page/clients/detail/detail.component';
import { FooterComponent } from './page/clients/footer/footer.component';
import { HeaderComponent } from './page/clients/header/header.component';
import { HomeComponent } from './page/clients/home/home.component';
import { LoginComponent } from './page/clients/login/login.component';
import { ProductComponent } from './page/clients/product/product.component';
import { RegisterComponent } from './page/clients/register/register.component';
import { AccountsComponent } from './page/server/accounts/accounts.component';
import { CreateProductComponent } from './page/server/create-product/create-product.component';
import { DashboardComponent } from './page/server/dashboard/dashboard.component';
import { UpdateProductComponent } from './page/server/update-product/update-product.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { ApiServicesService } from './services/api-services.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { StarComponent } from './page/clients/star/star.component';
import { AdminComponent } from './page/server/admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    RegisterComponent,
    LoginComponent,
    DetailComponent,
    DashboardComponent,
    AccountsComponent,
    CreateProductComponent,
    UpdateProductComponent,
    StarComponent,
    AdminComponent,
  ],
  imports: [ BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule, ToastrModule.forRoot()],
  providers: [ApiServicesService ],
  bootstrap: [AppComponent],
})
export class AppModule {}
