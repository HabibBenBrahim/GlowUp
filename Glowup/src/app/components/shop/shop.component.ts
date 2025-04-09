import { Component } from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  imports: [ItemCardComponent,CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  filters: string[] = ['All', 'Rings', 'Bags', 'Necklaces', 'Him', 'Her'];
  selectedFilter: string = 'All';

  // Fake list of 20 item cards
  items = Array.from({ length: 20 }, (_, i) => ({ id: i + 1 }));
  
  setFilter(filter: string) {
    this.selectedFilter = filter;
    // Add filtering logic here later if needed
  }
}
