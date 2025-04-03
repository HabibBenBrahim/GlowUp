import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'itemCard',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css'],
  imports: [NgClass]
})
export class ItemCardComponent {
  @Input() name: string = 'ringu ring';
  @Input() price: any = 49+'Tnd';
  @Input() details: string = 'this is a test detail sentence';
  @Input() primaryImage: string = 'ring.jpg';
  @Input() secondaryImage: string = 'ring2.jpg';
  
  isHovering: boolean = false;

  onMouseEnter() {
    this.isHovering = true;
  }

  onMouseLeave() {
    this.isHovering = false;
  }
}