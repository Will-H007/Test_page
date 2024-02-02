// content.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSectionComponent } from './profile_section/profile_section.component';
import { RegionalSectionComponent } from './regional_section/regional_setting.component';
@Component({
  selector: 'settings-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [ CommonModule,ProfileSectionComponent, RegionalSectionComponent],
})
export class ProfileComponent {
  

}
