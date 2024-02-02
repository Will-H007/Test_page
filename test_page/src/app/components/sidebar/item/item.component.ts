// item.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'sidebar-item',
  standalone:true,
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  imports: [CommonModule],
})
export class ItemComponent {
  @Input() icon: string = ''; // Assuming SVG content is a string
  @Input() title: string = '';
  @Input() count?: number;
}
