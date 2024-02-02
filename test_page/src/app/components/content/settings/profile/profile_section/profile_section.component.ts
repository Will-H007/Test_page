// content.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFieldComponent } from '../../../../fields/textfield/textfield.component';
@Component({
  selector: 'profile_section',
  standalone: true,
  templateUrl: './profile_section.component.html',
  styleUrls: ['./profile_section.component.css'],
  imports: [ CommonModule, TextFieldComponent],
})
export class ProfileSectionComponent {
  textfields = [
    { label:"testing1" },
    { label:"testing2" },
    { label:"testing3" },
    { label:"testing1" },
    { label:"testing2" },
    { label:"testing3" },
   
   
  ];

}
