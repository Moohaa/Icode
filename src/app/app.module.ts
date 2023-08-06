import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownModule } from '@coreui/angular';
import { NavModule, TabsModule } from '@coreui/angular';

import { ButtonModule } from '@coreui/angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavModule,
    TabsModule,
    DropdownModule,
    ButtonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
