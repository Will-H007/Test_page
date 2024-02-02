// content.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'textfield',
  standalone:true,
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css'],
  imports: [ CommonModule],
})
export class TextFieldComponent {
  @Input() label: string = '';



}
