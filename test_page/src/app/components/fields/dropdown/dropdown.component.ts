// content.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dropdown',
  standalone:true,
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  imports: [ CommonModule],
})
export class DropDownComponent {
  @Input() label: string = '';
  @Input() options: { label: string; value: string }[] = [];

}
