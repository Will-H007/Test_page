// content.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFieldComponent } from '../../../../fields/textfield/textfield.component';
import { UploadFieldComponent } from '../../../../fields/uploadfield/uploadfield.component';
@Component({
  selector: 'profile_section',
  standalone: true,
  templateUrl: './profile_section.component.html',
  styleUrls: ['./profile_section.component.css'],
  imports: [ CommonModule, TextFieldComponent, UploadFieldComponent],
})
export class ProfileSectionComponent {
  textfields = [
    { label:"testing1" },
    { label:"testing2" },
    { label:"testing3" },
    { label:"testing4" },
  ];

  uploadlabel = "Profile Image";

}
