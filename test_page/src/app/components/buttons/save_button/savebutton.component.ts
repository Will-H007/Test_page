// content.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'savebutton',
  standalone: true,
  templateUrl: './savebutton.component.html',
  styleUrls: ['./savebutton.component.css'],
  imports: [ CommonModule],
})

export class SaveButtonComponent {
}
