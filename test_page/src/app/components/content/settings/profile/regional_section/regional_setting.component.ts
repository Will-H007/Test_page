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
        { label: 'Language', options: [
          { label: 'English', value: 'english' },
          { label: 'Spanish', value: 'spanish' },
          { label: 'French', value: 'french' },
          { label: 'German', value: 'german' }
        ] },
        { label: 'Timezone', options: [
          { label: 'GMT +02:00', value: 'GMT +02:00' },
          { label: 'GMT -05:00', value: 'GMT -05:00' },
          { label: 'GMT +08:00', value: 'GMT +08:00' },
          { label: 'GMT -03:00', value: 'GMT -03:00' }
        ] },
        // Add more dropdowns as needed
      ];

}
