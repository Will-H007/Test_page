// content.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { CancelButtonComponent } from '../buttons/cancel_button/cancelbutton.component';
import { SaveButtonComponent } from '../buttons/save_button/savebutton.component';
@Component({
  selector: 'app-content',
  standalone:true,
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  imports: [ CommonModule, SettingsComponent, CancelButtonComponent, SaveButtonComponent],
})
export class contentComponent {
  

}
