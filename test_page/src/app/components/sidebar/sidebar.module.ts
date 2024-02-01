// sidebar.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { ItemModule } from './item/item.module'; // Import ItemModule

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, ItemModule], // Include ItemModule in imports
})
export class SidebarModule {}
