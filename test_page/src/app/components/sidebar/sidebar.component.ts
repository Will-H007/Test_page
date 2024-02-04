// sidebar.component.ts
import { Component } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { CommonModule } from '@angular/common';

export interface SidebarItem {
  svg: string;
  title: string;
  count?: number; // Make count optional
}


@Component({
  selector: 'app-sidebar',
  standalone:true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [ItemComponent, CommonModule],
})



export class SidebarComponent {
  
  menuItems : SidebarItem[] = [
    { svg:'assets/sidebar_icons/dashboard.png', title: 'Dashboard' },
    { svg:'assets/sidebar_icons/orders.png', title: 'Orders', count: 16 },

    {  svg:'assets/sidebar_icons/products.png',title: 'Products' },
    {  svg:'assets/sidebar_icons/categories.png',title: 'Categories'},
    {  svg:'assets/sidebar_icons/customers.png',title: 'Customers'},
    {  svg:'assets/sidebar_icons/reports.png',title: 'Reports'},
    {  svg:'assets/sidebar_icons/coupons.png',title: 'Coupons'},
    {  svg:'assets/sidebar_icons/inbox.png',title: 'Inbox' },
  ];

  otherInformation: SidebarItem[] = [
    {  svg:'assets/sidebar_icons/knowledge_base.png',title: 'Knowledge Base' },
    {  svg:'assets/sidebar_icons/product_updates.png',title: 'Product Updates' },
  ]

  settingItems: SidebarItem[] = [
    {  svg:'assets/sidebar_icons/personal_settings.png',title: 'Personal Settings'},
    {  svg:'assets/sidebar_icons/global_settings.png',title: 'Global Settings' },
  ]

  currentSideTab = "Personal Settings"

}
