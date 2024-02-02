// content.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
@Component({
  selector: 'app-content',
  standalone:true,
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  imports: [ CommonModule, SettingsComponent],
})
export class contentComponent {
  

}
