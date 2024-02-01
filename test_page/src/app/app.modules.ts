import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './components/sidebar/item/item.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
@NgModule({
  declarations: [
    // Components
    AppComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    // Angular modules
    BrowserModule,
    FormsModule,
    SidebarComponent,
    ItemComponent,
    CommonModule
    // Additional modules...
  ],
  providers: [
    // Services and other providers
  ],
  bootstrap: [
    // The main component
    AppComponent,
  ],
})
export class AppModule {}
