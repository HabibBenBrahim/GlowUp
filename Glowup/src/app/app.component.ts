import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent,RouterOutlet,ItemCardComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemList = [
    { name: 'Ring 1', price: '49 Tnd', details: 'This is a beautiful ring.', primaryImage: 'ring.jpg', secondaryImage: 'ring2.jpg' },
    { name: 'Ring 2', price: '55 Tnd', details: 'This is a stunning ring.', primaryImage: 'ring.jpg', secondaryImage: 'ring2.jpg' },
    { name: 'Ring 3', price: '69 Tnd', details: 'Elegant and classy ring.', primaryImage: 'ring.jpg', secondaryImage: 'ring2.jpg' },
    { name: 'Ring 4', price: '45 Tnd', details: 'A simple and elegant ring.', primaryImage: 'ring.jpg', secondaryImage: 'ring2.jpg' },
    { name: 'Ring 5', price: '75 Tnd', details: 'Luxurious and sparkly ring.', primaryImage: 'ring.jpg', secondaryImage: 'ring2.jpg' },
    { name: 'Ring 6', price: '60 Tnd', details: 'Modern design ring.', primaryImage: 'ring.jpg', secondaryImage: 'ring2.jpg' },
    { name: 'Ring 7', price: '80 Tnd', details: 'Classic design ring.', primaryImage: 'ring.jpg', secondaryImage: 'ring2.jpg' },
    { name: 'Ring 8', price: '99 Tnd', details: 'Beautiful gemstone ring.', primaryImage: 'ring.jpg', secondaryImage: 'ring2.jpg' },
    { name: 'Ring 9', price: '110 Tnd', details: 'Sophisticated and trendy ring.', primaryImage: 'ring.jpg', secondaryImage: 'ring2.jpg' },
    { name: 'Ring 10', price: '65 Tnd', details: 'Minimalistic design ring.', primaryImage: 'ring.jpg', secondaryImage: 'ring2.jpg' },
    { name: 'Ring 11', price: '120 Tnd', details: 'Unique handcrafted ring.', primaryImage: 'ring.jpg', secondaryImage: 'ring2.jpg' },
    { name: 'Ring 12', price: '130 Tnd', details: 'Luxurious vintage ring.', primaryImage: 'ring.jpg', secondaryImage: 'ring2.jpg' },
    { name: 'Ring 13', price: '150 Tnd', details: 'Handmade designer ring.', primaryImage: 'ring.jpg', secondaryImage: 'ring2.jpg' },
    { name: 'Ring 14', price: '180 Tnd', details: 'Special edition ring.', primaryImage: 'ring.jpg', secondaryImage: 'ring2.jpg' },
    { name: 'Ring 15', price: '200 Tnd', details: 'Exclusive collection ring.', primaryImage: 'ring.jpg', secondaryImage: 'ring2.jpg' },
    { name: 'Ring 16', price: '250 Tnd', details: 'Royal design ring.', primaryImage: 'ring.jpg', secondaryImage: 'ring2.jpg' },
    { name: 'Ring 17', price: '220 Tnd', details: 'Vintage style ring.', primaryImage: 'ring.jpg', secondaryImage: 'ring2.jpg' },
    { name: 'Ring 18', price: '260 Tnd', details: 'Elegant diamond ring.', primaryImage: 'ring.jpg', secondaryImage: 'ring2.jpg' },
    { name: 'Ring 19', price: '300 Tnd', details: 'Exquisite gemstone ring.', primaryImage: 'ring.jpg', secondaryImage: 'ring2.jpg' },
    { name: 'Ring 20', price: '350 Tnd', details: 'Limited edition designer ring.', primaryImage: 'ring.jpg', secondaryImage: 'ring2.jpg' },
  ];
}
