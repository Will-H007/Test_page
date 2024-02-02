// content.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'uploadfield',
  standalone:true,
  templateUrl: './uploadfield.component.html',
  styleUrls: ['./uploadfield.component.css'],
  imports: [ CommonModule],
})
export class UploadFieldComponent {
  @Input() label: string = '';



}
