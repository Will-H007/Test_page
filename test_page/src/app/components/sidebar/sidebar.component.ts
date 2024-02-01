// sidebar.component.ts
import { Component } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  standalone:true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [ItemComponent, CommonModule],
})
export class SidebarComponent {
  menuItems = [
    { title: 'Dashboard', count: 16 },
    { title: 'Orders', count: 0 },
    { title: 'Products', count: 0 },
    { title: 'Categories', count: 8 },
    { title: 'Customers', count: 22 },
    { title: 'Reports', count: 5 },
    { title: 'Coupons', count: 10 },
    { title: 'Inbox', count: 3 },
  ];

  otherInformation = [
    { title: 'Knowledge Base', count: 10 },
    { title: 'Product Updates', count: 3 },
  ]

  settingItems = [
    { title: 'Personal Settings', count: 10 },
    { title: 'Global Settings', count: 5 },
  ]

}
