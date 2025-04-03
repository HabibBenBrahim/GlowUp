import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemCardComponent } from './item-card/item-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ItemCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Glowup';
}
