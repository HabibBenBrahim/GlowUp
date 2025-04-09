import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { ShopComponent } from './shop/shop.component';
// import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: 'shop', component: ShopComponent },
  // { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
