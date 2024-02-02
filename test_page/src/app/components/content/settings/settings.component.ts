// content.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
@Component({
  selector: 'settings',
  standalone: true,
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  imports: [ CommonModule, ProfileComponent],
})
export class SettingsComponent {
  

}
