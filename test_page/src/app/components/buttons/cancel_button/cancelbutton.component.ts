// content.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cancelbutton',
  standalone: true,
  templateUrl: './cancelbutton.component.html',
  styleUrls: ['./cancelbutton.component.css'],
  imports: [ CommonModule],
})

export class CancelButtonComponent {
}
