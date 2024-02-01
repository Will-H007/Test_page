// sidebar.component.ts
import { Component } from '@angular/core';
import { ItemComponent } from './item/item.component';
@Component({
  selector: 'app-sidebar',
  standalone:true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [ItemComponent],
})
export class SidebarComponent {
  menuItems = [
    { title: 'Dashboard', count: 16 },
    { title: 'Orders', count: 0 }, // Replace 'your-orders-svg' with the actual SVG content
    { title: 'Products', count: 0 }, // Replace 'your-products-svg' with the actual SVG content
    // Add more items as needed
  ];

}
