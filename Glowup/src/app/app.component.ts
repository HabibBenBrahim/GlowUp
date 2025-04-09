import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer-component/footer.component';
import { ShopComponent } from "./components/shop/shop.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet, ItemCardComponent, CommonModule, FooterComponent, ShopComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
