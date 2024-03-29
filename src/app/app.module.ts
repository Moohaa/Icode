import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownModule } from '@coreui/angular';
import { NavModule, TabsModule } from '@coreui/angular';

import { ButtonModule } from '@coreui/angular';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';

import { FormsModule } from '@angular/forms';
import { SpinnerModule } from '@coreui/angular';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavModule,
    HttpClientModule,
    TabsModule,
    DropdownModule,
    ButtonModule ,
    MonacoEditorModule.forRoot(),
    FormsModule,
    SpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
