// item.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'sidebar-item',
  standalone:true,
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() title: string = '';
  @Input() count: number = 0;
}
