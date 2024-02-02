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
    { svg:'../../assets/sidebar_icons/dashboard.png', title: 'Dashboard', count: 16 },
    { svg:'../../assets/sidebar_icons/orders.png', title: 'Orders', count: 16 },

    {  svg:'../../assets/sidebar_icons/products.png',title: 'Products', count: 0 },
    {  svg:'../../assets/sidebar_icons/categories.png',title: 'Categories', count: 8 },
    {  svg:'../../assets/sidebar_icons/customers.png',title: 'Customers', count: 22 },
    {  svg:'../../assets/sidebar_icons/reports.png',title: 'Reports', count: 5 },
    {  svg:'../../assets/sidebar_icons/coupons.png',title: 'Coupons', count: 10 },
    {  svg:'../../assets/sidebar_icons/inbox.png',title: 'Inbox', count: 3 },
  ];

  otherInformation = [
    {  svg:'../../assets/sidebar_icons/knowledge_base.png',title: 'Knowledge Base', count: 0 },
    {  svg:'../../assets/sidebar_icons/product_updates.png',title: 'Product Updates', count: 0 },
  ]

  settingItems = [
    {  svg:'../../assets/sidebar_icons/personal_settings.png',title: 'Personal Settings', count: 0 },
    {  svg:'../../assets/sidebar_icons/global_settings.png',title: 'Global Settings', count: 0 },
  ]

}
