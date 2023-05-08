import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { AboutComponent } from '../app/about/about.component';
import { XyzComponent } from '../app/xyz/xyz.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  {
    path: 'xyzpage',
    component: XyzComponent,
  },
  {
    path:'**' , component:NotFoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
