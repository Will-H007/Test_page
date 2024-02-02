// content.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownComponent } from '../../../../fields/dropdown/dropdown.component';
@Component({
  selector: 'regional_section',
  standalone: true,
  templateUrl: './regional_section.component.html',
  styleUrls: ['./regional_section.component.css'],
  imports: [ CommonModule, DropDownComponent],
})
export class RegionalSectionComponent {
    dropdowns = [
        { label:"testing1" },
        { label:"testing2" },
       
      ];

}
